
-- Create the waitlist table
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting (anyone can add their email to the waitlist)
CREATE POLICY "Allow public to insert emails" 
  ON public.waitlist 
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

-- Create policy for selecting (only authenticated users can view the waitlist)
CREATE POLICY "Allow authenticated users to view emails" 
  ON public.waitlist 
  FOR SELECT 
  TO authenticated
  USING (true);

-- Create an index on the email column for faster lookups
CREATE INDEX IF NOT EXISTS waitlist_email_idx ON public.waitlist (email);

-- Add a comment to the table for better documentation
COMMENT ON TABLE public.waitlist IS 'Table for storing waitlist emails for MedSync app';
