
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

const DisclaimerPage: React.FC = () => {
  return (
    <LegalPageLayout title="Disclaimer">
        <p>The information and services provided by Walidos LLC are for general informational and marketing purposes only. While we strive to provide high-quality services and strategies, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or suitability of the information, products, or services contained on the website or provided to clients.</p>
        
        <h2>No Guarantees</h2>
        <p>Walidos LLC provides digital marketing services only. Results depend on numerous factors outside of our direct control, including but not limited to market conditions, industry competition, search engine algorithm changes, client budget, and client cooperation. Therefore, we do not guarantee specific rankings, traffic volumes, leads, or revenue outcomes. Any testimonials or past performance examples are not an indication or guarantee of future results.</p>
        
        <h2>Third-Party Links</h2>
        <p>Our website may contain links to third-party websites that are not controlled by Walidos LLC. We have no control over the nature, content, and availability of those sites and are not responsible for their content or privacy practices.</p>
        
        <h2>Professional Advice</h2>
        <p>The content on this website does not constitute financial, legal, or professional advice. It is your responsibility to consult with a qualified professional for advice tailored to your specific situation.</p>
        
        <p>By using our services, you agree that Walidos LLC is not liable for any business decisions you make based on our advice, strategies, or reports.</p>
    </LegalPageLayout>
  );
};

export default DisclaimerPage;
