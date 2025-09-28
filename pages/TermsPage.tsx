
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

const TermsPage: React.FC = () => {
  return (
    <LegalPageLayout title="Terms of Service">
      <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
      <p>Please read these Terms of Service ("Terms") carefully before using the services provided by Walidos LLC ("us," "we," or "our"). Your access to and use of our services is conditioned upon your acceptance of and compliance with these Terms.</p>
      
      <h2>1. Services</h2>
      <p>Walidos LLC provides digital marketing services, including but not limited to Search Engine Optimization (SEO), Social Media Marketing, and performance reporting. The specific scope of services will be detailed in a separate client agreement.</p>
      
      <h2>2. Payment and Billing</h2>
      <p>Services begin upon receipt of a signed client agreement and initial deposit. All fees are due monthly as per the invoice provided. Payments are to be made in USD.</p>
      
      <h2>3. Client Responsibilities</h2>
      <p>The client agrees to provide all necessary access to information, accounts, and materials required for us to perform our services. Delays in client response may impact project timelines and results.</p>
      
      <h2>4. Cancellation and Termination</h2>
      <p>Our services operate on a month-to-month basis after any initial commitment period outlined in the client agreement. Either party may terminate the agreement with a written 30-day notice. Upon termination, the client is responsible for any outstanding payments for services rendered.</p>
      
      <h2>5. Intellectual Property</h2>
      <p>All work product, including content, graphics, and strategies created by Walidos LLC for the client, becomes the exclusive property of the client upon full and final payment for the services.</p>
      
      <h2>6. Confidentiality</h2>
      <p>Both parties agree to keep all non-public information confidential and not to disclose it to any third party without prior written consent.</p>
      
      <h2>7. Limitation of Liability</h2>
      <p>Walidos LLC will not be liable for any indirect, incidental, or consequential damages resulting from the use of our services. Our total liability is limited to the total amount paid by the client for the services in the preceding month.</p>
      
      <h2>8. Changes to Terms</h2>
      <p>We reserve the right to modify these Terms at any time. We will notify clients of any significant changes. Continued use of our services after such changes constitutes acceptance of the new Terms.</p>
    </LegalPageLayout>
  );
};

export default TermsPage;
