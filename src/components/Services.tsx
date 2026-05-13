import { Check } from 'lucide-react';

export default function Services() {
  const tiers = [
    {
      name: 'Starter',
      price: 299,
      description: 'Perfect for new businesses or a simple online presence.',
      features: [
        'Single Page Design',
        'Mobile Responsive',
        'Contact Form',
        'Basic SEO Setup',
        'Google Maps Integration'
      ],
    },
    {
      name: 'Standard',
      price: 599,
      description: 'The sweet spot for established local businesses.',
      features: [
        'Up to 5 Pages',
        'Mobile Responsive',
        'Advanced Contact Form',
        'Full SEO Optimization',
        'Portfolio/Gallery Section',
        'Content Management System'
      ],
    },
    {
      name: 'Premium',
      price: 999,
      description: 'For businesses that want the best-in-class experience.',
      features: [
        'Custom Design',
        'Unlimited Pages',
        'E-commerce Ready',
        'Premium Stock Images',
        'Speed & Performance Focus',
        'Monthly Analytics Report'
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl font-montserrat">Our Packages</h2>
          <p className="mt-4 text-xl text-slate font-inter">Simple, transparent pricing with no surprises.</p>
          <div className="mt-4 inline-flex items-center px-4 py-1 rounded-full bg-navy/10 text-navy text-sm font-bold font-montserrat">
            Maintenance: £50/month for all tiers
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate/10 flex flex-col">
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-navy font-montserrat">{tier.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-navy font-montserrat">£{tier.price}</span>
                  <span className="ml-1 text-xl font-medium text-slate font-inter">setup</span>
                </div>
                <p className="mt-4 text-slate font-inter">{tier.description}</p>
                <ul className="mt-8 space-y-4 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-navy shrink-0" />
                      <span className="ml-3 text-slate font-inter">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 block w-full bg-navy text-white text-center px-6 py-3 rounded-md font-bold font-montserrat hover:bg-slate transition-colors"
                >
                  Choose {tier.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
