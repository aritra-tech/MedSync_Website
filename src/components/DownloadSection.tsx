
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Smartphone, Mail, AlertTriangle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

const emailSchema = z.string().email("Please enter a valid email address");

const DownloadSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    try {
      emailSchema.parse(email);
    } catch (error) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Check if Supabase is configured before proceeding
      if (!isSupabaseConfigured()) {
        toast({
          title: "Configuration Error",
          description: "Supabase is not properly configured. Please set the required environment variables.",
          variant: "destructive",
        });
        console.error("Supabase configuration missing. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.");
        setIsSubmitting(false);
        return;
      }

      // Store email in Supabase waitlist table
      const { error } = await supabase
        .from('waitlist')
        .insert({ email });

      if (error) {
        throw error;
      }
      
      // Clear form and show success message
      setEmail('');
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll notify you when MedSync is available.",
      });
    } catch (error) {
      console.error("Error submitting waitlist form:", error);
      toast({
        title: "Something went wrong",
        description: "Unable to join the waitlist. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="download" className="py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-indigo-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-medsync-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-medsync-blue-light to-medsync-blue-dark">
              Coming Soon to Android
            </span>
          </h2>
          
          <p className="text-gray-600 mb-10 text-lg">
            MedSync is currently in development for Android devices. Join our waitlist to be the first to know when it's available.
          </p>
          
          <div className="bg-white shadow-xl rounded-2xl p-8 mb-10">
            {!isSupabaseConfigured() && (
              <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-lg p-4 mb-6 flex items-center gap-2">
                <AlertTriangle size={18} />
                <span>Supabase is not configured. Waitlist submissions will not be saved. Please set the required environment variables.</span>
              </div>
            )}
            
            <div className="flex items-center justify-center mb-6">
              <Smartphone size={32} className="text-medsync-blue mr-2" />
              <h3 className="text-2xl font-bold">Android App Coming Soon</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Be among the first to experience MedSync when it launches. Sign up for our waitlist to receive early access.
            </p>
            
            <form onSubmit={handleJoinWaitlist} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={handleEmailChange}
                required
                className="flex-1"
              />
              <Button 
                type="submit" 
                className="primary-gradient-button"
                disabled={isSubmitting}
              >
                <Mail size={16} className="mr-2" />
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="rounded-xl p-6 bg-white shadow-md">
              <div className="text-medsync-blue font-bold text-lg mb-2">Step 1</div>
              <h3 className="font-medium mb-2">Join the Waitlist</h3>
              <p className="text-gray-600 text-sm">Sign up to be notified when MedSync launches on the Google Play Store.</p>
            </div>
            
            <div className="rounded-xl p-6 bg-white shadow-md">
              <div className="text-medsync-blue font-bold text-lg mb-2">Step 2</div>
              <h3 className="font-medium mb-2">Get Early Access</h3>
              <p className="text-gray-600 text-sm">Selected users will receive early access to test the app before official release.</p>
            </div>
            
            <div className="rounded-xl p-6 bg-white shadow-md">
              <div className="text-medsync-blue font-bold text-lg mb-2">Step 3</div>
              <h3 className="font-medium mb-2">Download & Enjoy</h3>
              <p className="text-gray-600 text-sm">Install MedSync from the Google Play Store and start managing your medications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
