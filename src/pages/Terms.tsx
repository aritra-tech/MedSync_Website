
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
          <p className="mb-4">These terms and conditions apply to the MedSync app (hereby referred to as "Application") for mobile devices that was created by Aritra Das (hereby referred to as "Service Provider") as an Open Source service.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Application Usage</h2>
          <p className="mb-4">Upon downloading or utilizing the Application, you are automatically agreeing to the following terms. It is strongly advised that you thoroughly read and understand these terms prior to using the Application.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">If you have any questions about these Terms and Conditions, please contact us at aritrarick2002@gmail.com</p>
          
          <p className="text-sm text-gray-600 mt-8">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
