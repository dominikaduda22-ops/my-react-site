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
              <p>My name is <b> Iesha Long </b>, and at 20 years old, I'm proud to lead Walidos LLC — a U.S.-registered digital marketing company operating with a strong foundation in Cherokee, Alabama. From here, I manage our day-to-day operations, client relationships, and the strategic direction of our agency.</p>
              <p>Growing up, I watched small businesses struggle to compete online despite having great products and passionate owners. That sparked my commitment to mastering digital marketing, not just as a profession, but as a way to help business owners gain the visibility and growth they deserve.</p>
				<p> After establishing Walidos LLC in the U.S., I built this agency around one mission: to provide honest, high-impact marketing for B2C brands using data-driven strategy, transparent communication, and modern American business standards. We don’t promise overnight miracles — we deliver sustainable, measurable results through testing, analytics, and real strategy. </p>
              <p><strong>WALIDOS LLC IS OWNED AND OPERATED BY IESHA LONG</strong></p>
              <p><strong>1590 Plantview Drive, Cherokee, Alabama 35616</strong></p>
              <p><strong>+1-256-560-5902</strong></p>
            </div>
          </div>

          <div className="md:col-span-2">
            <img
  		src={`${import.meta.env.BASE_URL}owner.png`}   // pulls from public/ and respects subpath or root
  		alt="Iesha Long, Founder of Walidos LLC"
  		className="rounded-lg shadow-2xl w-full h-auto object-cover"
	/>

            <p className="text-center mt-2 text-sm text-gray-600">Iesha Longs, Founder & CEO</p>
          </div>
        </div>

        {/* …rest of your component unchanged… */}
      </div>
    </div>
  );
};

export default AboutPage;
