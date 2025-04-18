
import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
        <div className="prose max-w-none">
          <p>These terms and conditions apply to the Aritra Das app (hereby referred to as "Application") for mobile devices that was created by Aritra Das (hereby referred to as "Service Provider") as an Open Source service.</p>

          <p className="mt-4">Upon downloading or utilizing the Application, you are automatically agreeing to the following terms. It is strongly advised that you thoroughly read and understand these terms prior to using the Application.</p>

          {/* ... continue with the rest of the terms and conditions sections ... */}

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at <a href="mailto:aritrarick2002@gmail.com" className="text-blue-600 hover:underline">aritrarick2002@gmail.com</a>.</p>
          
          <p className="text-sm text-gray-600 mt-8">These terms and conditions are effective as of 2025-04-19</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
