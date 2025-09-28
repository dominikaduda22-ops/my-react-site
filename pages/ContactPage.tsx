import React from 'react';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you shortly.');
    // In a real app, you would handle form submission here.
  };

  const mapUrl = "https://www.google.com/maps?q=212+N.+2nd+St.+STE+100,+Richmond,+KY+40475";

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-center text-navy mb-16">
          Let’s Grow Together
        </h1>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <div>
            <div className="space-y-6 text-lg text-gray-700">
              <p>📍 <strong>Office:</strong> 212 N. 2nd St. STE 100, Richmond, KY 40475</p>
              <p>📞 <strong>Phone:</strong> <a href="tel:+17402566246" className="text-navy hover:text-gold transition-colors">(740) 256-6246</a></p>
              <p>✉️ <strong>Email:</strong> <a href="mailto:contact@walidosllcagency.info" className="text-navy hover:text-gold transition-colors">contact@walidosllcagency.info</a></p>
              <p>🕒 <strong>Hours:</strong> Monday–Friday, 9 AM – 6 PM EST</p>
            </div>
            <div className="mt-8">
              <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                <img src={`https://images.unsplash.com/photo-1579532589635-f5e266453531?q=80&w=2670&auto=format&fit=crop`} alt="Map to Walidos LLC office" className="rounded-lg shadow-md w-full h-auto object-cover" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">Full Name</label>
                <input type="text" id="fullName" name="fullName" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold" />
              </div>
              <div>
                <label htmlFor="businessName" className="block text-sm font-semibold text-gray-700">Business Name</label>
                <input type="text" id="businessName" name="businessName" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold" />
              </div>
               <div>
                <label htmlFor="website" className="block text-sm font-semibold text-gray-700">Website URL</label>
                <input type="url" id="website" name="website" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700">Service Interested In</label>
                <select id="service" name="service" required className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold">
                  <option>SEO</option>
                  <option>Social Media</option>
                  <option>Both</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} required placeholder="Tell us about your business and goals..." className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-navy text-white font-bold py-3 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-300">Send Message</button>
              </div>
            </form>
             <p className="text-center mt-4 text-sm text-gray-600">
                We reply to all inquiries within 1 business hour during office hours. After hours? Expect a response by 9 AM the next business day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
