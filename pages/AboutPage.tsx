import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-center text-navy mb-12">
          Why Walidos LLC? Because Your Growth Deserves Integrity.
        </h1>
        
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <h2 className="text-3xl font-montserrat font-bold text-navy mb-4">Founder Story</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>My name is Walid Anas. At 24, I’m proud to lead Walidos LLC, a U.S.registered company with its heart in two places: our official base in Richmond, Kentucky, and my hometown of Agdal Riyad in Rabat, Morocco, where I manage our operations. Growing up, I saw how small businesses struggled to be seen online. That inspired me to master digital marketing not just as a skill, but as a tool for empowerment.</p>
              <p>After establishing Walidos LLC as a registered business in the U.S. in 2024, I built our agency on a simple mission: <strong className="font-semibold text-navy">to offer B2C brands honest, high-impact marketing without the fluff, combining a global perspective with American business standards.</strong> We don’t promise overnight miracles, we build sustainable visibility through strategy, testing, and transparency.</p>
              <p><strong>WALIDOS LLC IS OWNED AND OPERATED BY WALID ANAS</strong></p>
              <p><strong>212 N. 2nd St. STE 100, Richmond, KY 40475</strong></p>
              <p><strong>+212 706063437</strong></p>
            </div>
          </div>
          <div className="md:col-span-2">
            <img 
              src="public\owner.png" 
              alt="Walid Anas, Founder of Walidos LLC" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
            <p className="text-center mt-2 text-sm text-gray-600">Walid Anas, Founder & CEO</p>
          </div>
        </div>

        <div className="mt-20">
            <h2 className="text-3xl font-montserrat font-bold text-navy text-center mb-10">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="p-6 border-t-4 border-gold bg-gray-50 rounded-lg shadow-md">
                    <h3 className="text-xl font-montserrat font-bold mb-2">Ethical Practices</h3>
                    <p className="text-gray-600">No black-hat SEO. No fake followers. Ever.</p>
                </div>
                <div className="p-6 border-t-4 border-gold bg-gray-50 rounded-lg shadow-md">
                    <h3 className="text-xl font-montserrat font-bold mb-2">B2C Specialization</h3>
                    <p className="text-gray-600">We speak the language of consumers—not just algorithms.</p>
                </div>
                 <div className="p-6 border-t-4 border-gold bg-gray-50 rounded-lg shadow-md">
                    <h3 className="text-xl font-montserrat font-bold mb-2">U.S. Accountability</h3>
                    <p className="text-gray-600">We’re a registered LLC in Richmond, KY—fully accountable under U.S. law.</p>
                </div>
                 <div className="p-6 border-t-4 border-gold bg-gray-50 rounded-lg shadow-md">
                    <h3 className="text-xl font-montserrat font-bold mb-2">Results Transparency</h3>
                    <p className="text-gray-600">You’ll always know what’s working (and what’s not).</p>
                </div>
            </div>
        </div>
        
        <div className="mt-20 bg-navy text-white rounded-lg p-10 md:p-16">
            <h2 className="text-3xl font-montserrat font-bold text-center mb-8">Why Clients Trust Us</h2>
            <div className="max-w-3xl mx-auto text-lg leading-relaxed">
              <p className="text-center mb-8">Unlike faceless agencies, Walidos LLC operates with full visibility:</p>
              <ul className="space-y-4 list-disc list-inside text-gold">
                <li><span className="text-white">U.S. registered business (EIN: 33-2175151)</span></li>
                <li><span className="text-white">Real office address in Madison County, KY</span></li>
                <li><span className="text-white">Direct access to founder Walid Anas</span></li>
                <li><span className="text-white">100% compliant with FTC and advertising standards</span></li>
              </ul>
              <p className="text-center mt-8 text-gray-300">Serving businesses across Madison County and beyond.</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
