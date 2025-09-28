
import React from 'react';

const ServiceCard: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
    <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-2xl font-montserrat font-bold text-navy mb-6 border-b-2 border-gold pb-2">{title}</h3>
        <ul className="space-y-3 text-gray-700 list-disc list-inside">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);

const ServicesPage: React.FC = () => {
    const seoServices = {
        title: 'SEO Services',
        items: [
            'Local SEO: Dominate "near me" searches with Google Business Profile optimization, citation building, and review management.',
            'E-commerce SEO: Product page optimization, category architecture, and schema markup to boost conversions.',
            'Technical SEO Audits: Site speed, mobile usability, crawlability fixes—delivered in plain English.',
            'Content Strategy: Blog posts, buying guides, and FAQ content that answers real customer questions.'
        ]
    };

    const socialMediaServices = {
        title: 'Social Media Marketing',
        items: [
            'Platform-Specific Campaigns: TikTok Reels for Gen Z, Instagram carousels for millennials, Facebook for broad reach.',
            'Ad Management: Meta & Google Ads with A/B testing, audience segmentation, and ROAS tracking.',
            'Influencer Collaboration: Vetting, outreach, and campaign management with micro-influencers in your niche.',
            'Community Engagement: Daily monitoring, comment responses, and UGC (user-generated content) curation.'
        ]
    };
    
    return (
        <div className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-center text-navy mb-16">
                    Marketing Services Built for B2C Success
                </h1>

                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    <ServiceCard title={seoServices.title} items={seoServices.items} />
                    <ServiceCard title={socialMediaServices.title} items={socialMediaServices.items} />
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="bg-navy text-white p-8 rounded-lg shadow-xl">
                        <h3 className="text-2xl font-montserrat font-bold text-gold mb-6 border-b-2 border-gold pb-2">Reporting & Support</h3>
                        <p className="mb-4">Every client receives:</p>
                        <ul className="space-y-3 list-disc list-inside">
                            <li>Bi-weekly performance reports (traffic, leads, sales attribution)</li>
                            <li>Monthly strategy calls with Walid or senior team</li>
                            <li>Dedicated Slack/email channel for urgent requests</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-lg border-l-4 border-gold">
                        <h3 className="text-2xl font-montserrat font-bold text-navy mb-4">Pricing Philosophy</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            We offer <strong className="font-semibold">custom packages</strong> starting at $750/month based on your goals, industry, and competition. No long-term contracts—cancel anytime with 30 days’ notice.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
