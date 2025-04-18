
import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p>This privacy policy applies to the Aritra Das app (hereby referred to as "Application") for mobile devices that was created by Aritra Das (hereby referred to as "Service Provider") as an Open Source service. This service is intended for use "AS IS".</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Information Collection and Use</h2>
          <p>The Application collects information when you download and use it. This information may include information such as:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your device's Internet Protocol address (e.g. IP address)</li>
            <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
            <li>The time spent on the Application</li>
            <li>The operating system you use on your mobile device</li>
          </ul>

          {/* ... continue with the rest of the privacy policy sections ... */}
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at <a href="mailto:aritrarick2002@gmail.com" className="text-blue-600 hover:underline">aritrarick2002@gmail.com</a>.</p>
          
          <p className="text-sm text-gray-600 mt-8">This privacy policy is effective as of 2025-04-19</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
