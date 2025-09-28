
import React from 'react';

const LegalPageLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="py-16 bg-white">
    <div className="container mx-auto px-6 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-navy mb-8 border-b-2 pb-4">{title}</h1>
      <div className="prose lg:prose-lg max-w-none text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);


const PrivacyPolicyPage: React.FC = () => {
  return (
    <LegalPageLayout title="Privacy Policy">
      <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
      
      <p>Walidos LLC ("we," "us," or "our") respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website, walidosllcagency.info.</p>

      <h2>Information We Collect</h2>
      <p>We collect information you voluntarily provide to us through our contact form, including:</p>
      <ul>
        <li>Full Name</li>
        <li>Business Name</li>
        <li>Email Address</li>
        <li>Phone Number</li>
        <li>Website URL</li>
        <li>Any other information you provide in your message.</li>
      </ul>

      <h2>Use of Your Information</h2>
      <p>We use the information we collect solely to:</p>
      <ul>
        <li>Respond to your inquiries and provide you with requested information.</li>
        <li>Communicate with you about our services.</li>
        <li>Fulfill our contractual obligations if you become a client.</li>
      </ul>

      <h2>Cookies and Tracking</h2>
      <p>We use essential cookies for the basic functionality of our website. We do not use cookies for tracking, advertising, or analytics purposes that compromise your privacy.</p>

      <h2>Data Sharing and Disclosure</h2>
      <p>We will never sell, rent, or share your personal information with third parties for marketing purposes. We may only disclose your information if required by law or to protect our rights.</p>
      
      <h2>Data Security</h2>
      <p>We implement reasonable security measures to protect your information from unauthorized access, use, or disclosure.</p>

      <h2>Your Rights (GDPR/CCPA)</h2>
      <p>You have the right to access, correct, or delete your personal information. To make such a request, please contact us at contact@walidosllcagency.info. We will respond to your request in a timely manner.</p>
      
      <h2>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at:</p>
      <p>Walidos LLC<br/>212 N. 2nd St. STE 100<br/>Richmond, KY 40475<br/>Email: contact@walidosllcagency.info</p>
    </LegalPageLayout>
  );
};

export default PrivacyPolicyPage;
