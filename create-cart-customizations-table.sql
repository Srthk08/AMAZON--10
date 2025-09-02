-- Create cart_customizations table
-- This table stores cart customization data for users

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS update_cart_customizations_updated_at ON cart_customizations;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view own cart customizations" ON cart_customizations;
DROP POLICY IF EXISTS "Users can insert own cart customizations" ON cart_customizations;
DROP POLICY IF EXISTS "Users can update own cart customizations" ON cart_customizations;
DROP POLICY IF EXISTS "Users can delete own cart customizations" ON cart_customizations;

-- Drop existing table if it exists (to recreate with correct structure)
DROP TABLE IF EXISTS cart_customizations;

-- Create cart_customizations table
CREATE TABLE cart_customizations (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_email text NOT NULL,
  product_id text NOT NULL, -- Changed from UUID to text to accept string values
  product_name text NOT NULL,
  product_description text,
  base_price decimal(10,2) NOT NULL DEFAULT 0,
  custom_name text DEFAULT '',
  selected_color text DEFAULT '#3B82F6',
  selected_features jsonb DEFAULT '[]',
  project_name text DEFAULT '',
  contact_person text DEFAULT '',
  restaurant_name text DEFAULT '',
  cuisine_type text DEFAULT '',
  app_name text DEFAULT '',
  contact_email text DEFAULT '',
  contact_phone text DEFAULT '',
  primary_color text DEFAULT '#3B82F6',
  secondary_color text DEFAULT '#A5CF6',
  accent_color text DEFAULT '#F59E0B',
  text_color text DEFAULT '#1F2937',
  additional_requirements text DEFAULT '',
  cart_status text DEFAULT 'active' CHECK (cart_status IN ('active', 'pending', 'completed', 'cancelled')),
  is_checkout_initiated boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE cart_customizations ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for cart_customizations
CREATE POLICY "Users can view own cart customizations" ON cart_customizations 
  FOR SELECT TO authenticated 
  USING (user_email = auth.jwt() ->> 'email');

CREATE POLICY "Users can insert own cart customizations" ON cart_customizations 
  FOR INSERT TO authenticated 
  WITH CHECK (user_email = auth.jwt() ->> 'email');

CREATE POLICY "Users can update own cart customizations" ON cart_customizations 
  FOR UPDATE TO authenticated 
  USING (user_email = auth.jwt() ->> 'email')
  WITH CHECK (user_email = auth.jwt() ->> 'email');

CREATE POLICY "Users can delete own cart customizations" ON cart_customizations 
  FOR DELETE TO authenticated 
  USING (user_email = auth.jwt() ->> 'email');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_cart_customizations_user_email ON cart_customizations(user_email);
CREATE INDEX IF NOT EXISTS idx_cart_customizations_product_id ON cart_customizations(product_id);
CREATE INDEX IF NOT EXISTS idx_cart_customizations_status ON cart_customizations(cart_status);
CREATE INDEX IF NOT EXISTS idx_cart_customizations_created_at ON cart_customizations(created_at);

-- Add trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_cart_customizations_updated_at 
  BEFORE UPDATE ON cart_customizations 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();
