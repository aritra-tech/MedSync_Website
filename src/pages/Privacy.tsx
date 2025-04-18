
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="mb-4">This privacy policy applies to the MedSync app (hereby referred to as "Application") for mobile devices that was created by Aritra Das (hereby referred to as "Service Provider") as an Open Source service.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Information Collection and Use</h2>
          <p className="mb-4">The Application collects information when you download and use it. This information may include:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your device's Internet Protocol address (e.g. IP address)</li>
            <li>The pages of the Application that you visit, the time and date of your visit</li>
            <li>The time spent on those pages</li>
            <li>The operating system you use on your mobile device</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">If you have any questions regarding privacy while using the Application, please contact us at aritrarick2002@gmail.com</p>
          
          <p className="text-sm text-gray-600 mt-8">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
