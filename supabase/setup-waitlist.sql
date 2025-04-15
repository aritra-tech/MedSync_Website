
-- Create waitlist table
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Add comment to table
COMMENT ON TABLE public.waitlist IS 'Table to store email addresses of users who joined the MedSync waitlist';

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting records (public can add their email to waitlist)
CREATE POLICY "Allow public to insert their email" 
  ON public.waitlist 
  FOR INSERT 
  TO public 
  WITH CHECK (true);

-- Create policy for admin to view and manage all waitlist entries
CREATE POLICY "Allow authenticated users to view waitlist" 
  ON public.waitlist 
  FOR SELECT 
  TO authenticated 
  USING (true);

-- Create an index on the email column for faster lookups
CREATE INDEX IF NOT EXISTS waitlist_email_idx ON public.waitlist (email);
