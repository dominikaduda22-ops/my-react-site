import React from 'react';
import { Link } from 'react-router-dom';

const CheckIcon = () => (
  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-navy text-white text-center py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2670&auto=format&fit=crop')" }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold leading-tight mb-4">
            Data-Driven Marketing That Converts Browsers Into Buyers
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Walidos LLC helps B2C brands grow sustainably with ethical SEO, social media, and performance marketing—backed by real analytics and U.S.-based accountability.
          </p>
          <Link to="/contact" className="bg-gold text-navy font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors duration-300 text-lg">
            Get Your Free Marketing Audit →
          </Link>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <p className="text-lg leading-relaxed">
            Founded in 2024 by Walid Anas, Walidos LLC is a U.S.-registered marketing agency with a global perspective. While our business is proudly based in Richmond, KY, our founder manages operations from his hometown of Rabat, Morocco. This unique structure is built on one principle: <strong className="font-semibold">marketing should deliver measurable ROI, not just vanity metrics.</strong> We specialize exclusively in B2C clients, from e-commerce startups to local service providers, helping them rank higher, engage authentically, and sell more—online and offline.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-gold mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-2">🔍 Advanced SEO</h3>
              <p>Local, e-commerce & technical SEO tailored for consumer behavior.</p>
            </div>
            <div className="p-8 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-gold mb-4">
                 <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-2">📱 Social Media That Sells</h3>
              <p>Scroll-stopping content + targeted ads for Instagram, TikTok & Facebook.</p>
            </div>
            <div className="p-8 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-gold mb-4">
                 <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-2">📊 Transparent Reporting</h3>
              <p>Monthly performance dashboards with clear KPIs—no jargon, just results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-montserrat font-bold text-center mb-2">The Walidos Difference</h2>
            <p className="text-center text-gold mb-12">U.S. Accountability, Global Perspective</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="p-6">
                    <h3 className="text-xl font-montserrat font-bold mb-2">B2C-Obsessed</h3>
                    <p className="text-gray-300">We live and breathe consumer marketing. We don't just target demographics; we understand buyer psychology.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-montserrat font-bold mb-2">Radical Transparency</h3>
                    <p className="text-gray-300">Clear, jargon-free reports. You see what we see—the wins, the challenges, and the exact return on your investment.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-montserrat font-bold mb-2">Founder-Led Strategy</h3>
                    <p className="text-gray-300">Your strategy isn't handed off to a junior account manager. Walid Anas is directly involved in every client's success.</p>
                </div>
                <div className="p-6">
                    <h3 className="text-xl font-montserrat font-bold mb-2">No Long-Term Contracts</h3>
                    <p className="text-gray-300">We earn your business every month. Our results are our contract.</p>
                </div>
            </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-montserrat font-bold text-center mb-12">Driving Real Results for B2C Brands</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">"Walidos LLC doubled our online sales in six months. Their SEO strategy was a game-changer for our e-commerce store. For the first time, we're seeing real, measurable ROI from our marketing spend."</p>
              <p className="font-bold text-navy">- Sarah K., Founder, Luxe Linen Boutique</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">"As a local service business, getting found online was our biggest hurdle. Their local SEO work put us at the top of Google Maps in Richmond. Our phone has been ringing non-stop."</p>
              <p className="font-bold text-navy">- Mark T., Owner, Bluegrass Home Services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-center text-gray-600 font-semibold">
            <span className="flex items-center"><CheckIcon /> Registered Kentucky LLC</span>
            <span className="flex items-center"><CheckIcon /> U.S. Business Address</span>
            <span className="flex items-center"><CheckIcon /> EIN: 33-2175151</span>
            <span className="flex items-center"><CheckIcon /> Client-First Ethics</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-montserrat font-bold mb-4">
            Ready to grow with a partner who’s as invested in your success as you are?
          </h2>
          <p className="text-lg mb-8">
            Call us at <a href="tel:+17402566246" className="text-gold font-bold hover:underline">(740) 256-6246</a> or schedule your free strategy session today.
          </p>
          <Link to="/contact" className="bg-gold text-navy font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors duration-300 text-lg">
            Schedule a Free Session
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;