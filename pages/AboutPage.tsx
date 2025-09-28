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
  		src={`${import.meta.env.BASE_URL}owner.png`}   // pulls from public/ and respects subpath or root
  		alt="Walid Anas, Founder of Walidos LLC"
  		className="rounded-lg shadow-2xl w-full h-auto object-cover"
	/>

            <p className="text-center mt-2 text-sm text-gray-600">Walid Anas, Founder & CEO</p>
          </div>
        </div>

        {/* …rest of your component unchanged… */}
      </div>
    </div>
  );
};

export default AboutPage;
