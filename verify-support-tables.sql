-- Verify Support Ticket Tables
-- Run this in Supabase SQL Editor to check if tables exist

-- Check if tables exist
SELECT 
  'support_tickets' as table_name,
  EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'support_tickets') as exists
UNION ALL
SELECT 
  'support_ticket_replies' as table_name,
  EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'support_ticket_replies') as exists
UNION ALL
SELECT 
  'support_ticket_notifications' as table_name,
  EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'support_ticket_notifications') as exists;

-- If tables don't exist, create them
DO $$
BEGIN
  -- Create support_tickets table if it doesn't exist
  IF NOT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'support_tickets') THEN
    CREATE TABLE support_tickets (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      ticket_number text UNIQUE DEFAULT 'TKT-' || to_char(now(), 'YYYYMMDD') || '-' || lpad(floor(random() * 10000)::text, 4, '0'),
      user_id uuid REFERENCES auth.users(id),
      subject text NOT NULL,
      category text NOT NULL CHECK (category IN ('technical', 'billing', 'general', 'feature_request')),
      priority text NOT NULL CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
      description text NOT NULL,
      status text DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'resolved', 'closed')),
      assigned_to uuid REFERENCES auth.users(id),
      created_at timestamptz DEFAULT now(),
      updated_at timestamptz DEFAULT now(),
      resolved_at timestamptz,
      closed_at timestamptz,
      admin_notes text
    );
    
    -- Enable RLS
    ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;
    
    -- Create policies
    CREATE POLICY "Enable insert for authenticated users" ON support_tickets
      FOR INSERT TO authenticated
      WITH CHECK (user_id = auth.uid());
    
    CREATE POLICY "Enable select for users based on user_id" ON support_tickets
      FOR SELECT TO authenticated
      USING (user_id = auth.uid());
    
    RAISE NOTICE 'support_tickets table created successfully';
  ELSE
    RAISE NOTICE 'support_tickets table already exists';
  END IF;
  
  -- Create support_ticket_replies table if it doesn't exist
  IF NOT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'support_ticket_replies') THEN
    CREATE TABLE support_ticket_replies (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      ticket_id uuid REFERENCES support_tickets(id) ON DELETE CASCADE,
      user_id uuid REFERENCES auth.users(id),
      is_admin_reply boolean DEFAULT false,
      message text NOT NULL,
      created_at timestamptz DEFAULT now(),
      updated_at timestamptz DEFAULT now()
    );
    
    -- Enable RLS
    ALTER TABLE support_ticket_replies ENABLE ROW LEVEL SECURITY;
    
    RAISE NOTICE 'support_ticket_replies table created successfully';
  ELSE
    RAISE NOTICE 'support_ticket_replies table already exists';
  END IF;
  
  -- Create support_ticket_notifications table if it doesn't exist
  IF NOT EXISTS (SELECT FROM information_schema.tables WHERE table_name = 'support_ticket_notifications') THEN
    CREATE TABLE support_ticket_notifications (
      id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
      user_id uuid REFERENCES auth.users(id),
      ticket_id uuid REFERENCES support_tickets(id) ON DELETE CASCADE,
      subject text NOT NULL,
      message text NOT NULL,
      is_read boolean DEFAULT false,
      created_at timestamptz DEFAULT now()
    );
    
    -- Enable RLS
    ALTER TABLE support_ticket_notifications ENABLE ROW LEVEL SECURITY;
    
    RAISE NOTICE 'support_ticket_notifications table created successfully';
  ELSE
    RAISE NOTICE 'support_ticket_notifications table already exists';
  END IF;
END $$;

-- Verify tables exist now
SELECT 'Verification complete - all tables should exist now' as status;
