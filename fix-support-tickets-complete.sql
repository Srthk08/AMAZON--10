-- Complete fix for support tickets table
-- This will ensure the table exists with correct structure and data

-- Drop existing table if it exists (to start fresh)
DROP TABLE IF EXISTS public.support_tickets CASCADE;

-- Create the support_tickets table with correct structure
CREATE TABLE public.support_tickets (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    ticket_number VARCHAR(50) UNIQUE NOT NULL,
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255) NOT NULL,
    subject VARCHAR(500) NOT NULL,
    description TEXT NOT NULL,
    priority VARCHAR(20) DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
    status VARCHAR(20) DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'resolved', 'closed')),
    admin_replies JSONB DEFAULT '[]'::jsonb,
    assigned_to UUID REFERENCES auth.users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_support_tickets_status ON public.support_tickets(status);
CREATE INDEX idx_support_tickets_priority ON public.support_tickets(priority);
CREATE INDEX idx_support_tickets_created_at ON public.support_tickets(created_at);

-- Enable RLS
ALTER TABLE public.support_tickets ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Allow authenticated users to read all tickets" ON public.support_tickets;
DROP POLICY IF EXISTS "Allow authenticated users to insert tickets" ON public.support_tickets;
DROP POLICY IF EXISTS "Allow authenticated users to update tickets" ON public.support_tickets;

-- Create RLS policies
CREATE POLICY "Allow authenticated users to read all tickets" ON public.support_tickets
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Allow authenticated users to insert tickets" ON public.support_tickets
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update tickets" ON public.support_tickets
    FOR UPDATE
    TO authenticated
    USING (true);

-- Grant permissions
GRANT ALL ON public.support_tickets TO authenticated;
GRANT USAGE ON SCHEMA public TO authenticated;

-- Insert sample data with proper field names
INSERT INTO public.support_tickets (ticket_number, customer_name, customer_email, subject, description, priority, status) VALUES
('TKT-2024-001', 'John Doe', 'john.doe@example.com', 'App not loading properly', 'The app keeps showing a loading screen and never loads the main content. I have tried refreshing multiple times and restarting the app, but the issue persists.', 'high', 'open'),
('TKT-2024-002', 'Jane Smith', 'jane.smith@example.com', 'Password reset not working', 'I tried to reset my password but I am not receiving the reset email. I checked my spam folder as well.', 'medium', 'in_progress'),
('TKT-2024-003', 'Mike Johnson', 'mike.johnson@example.com', 'Feature request: Dark mode', 'It would be great to have a dark mode option in the app. The current light theme is too bright for night usage.', 'low', 'open'),
('TKT-2024-004', 'Sarah Wilson', 'sarah.wilson@example.com', 'Payment issue', 'I was charged twice for the same subscription. Please help me get a refund for the duplicate charge.', 'urgent', 'resolved'),
('TKT-2024-005', 'David Brown', 'david.brown@example.com', 'Login problems', 'I cannot log into my account. It says invalid credentials but I am sure the password is correct.', 'high', 'open'),
('TKT-2024-006', 'Lisa Davis', 'lisa.davis@example.com', 'Data sync issue', 'My data is not syncing across devices. Changes made on mobile are not showing on desktop.', 'medium', 'open'),
('TKT-2024-007', 'Robert Wilson', 'robert.wilson@example.com', 'Performance slow', 'The app is running very slowly, especially when loading large files. It takes several minutes to open.', 'high', 'in_progress'),
('TKT-2024-008', 'Maria Garcia', 'maria.garcia@example.com', 'Export feature not working', 'I cannot export my data. The export button does nothing when clicked.', 'medium', 'open'),
('TKT-2024-009', 'James Miller', 'james.miller@example.com', 'Notification settings', 'I am not receiving notifications even though they are enabled in settings.', 'low', 'resolved'),
('TKT-2024-010', 'Emily Taylor', 'emily.taylor@example.com', 'Account deletion', 'I want to delete my account but cannot find the option in the settings menu.', 'medium', 'open');

-- Verify the data was inserted correctly
SELECT 
    'Verification Query' as test,
    COUNT(*) as total_tickets,
    COUNT(CASE WHEN customer_name IS NOT NULL AND customer_name != '' THEN 1 END) as tickets_with_names,
    COUNT(CASE WHEN customer_email IS NOT NULL AND customer_email != '' THEN 1 END) as tickets_with_emails
FROM public.support_tickets;

-- Show sample data
SELECT 
    ticket_number,
    customer_name,
    customer_email,
    subject,
    priority,
    status
FROM public.support_tickets 
ORDER BY created_at DESC
LIMIT 5;
