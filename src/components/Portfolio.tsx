export default function Portfolio() {
  const samples = [
    { name: 'Precision Plumbers', trade: 'Plumbing', color: 'bg-navy/5' },
    { name: 'Eco Sparks', trade: 'Electrician', color: 'bg-navy/10' },
    { name: 'Lumina Salon', trade: 'Hair & Beauty', color: 'bg-navy/5' },
    { name: 'The Corner Cafe', trade: 'Restaurant', color: 'bg-navy/10' },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-navy font-montserrat">Sample Work</h2>
          <p className="mt-4 text-xl text-slate font-inter">Take a look at what we can build for your business.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {samples.map((sample) => (
            <div key={sample.name} className="group relative">
              <div className={`aspect-w-3 aspect-h-4 rounded-lg overflow-hidden ${sample.color} flex items-center justify-center p-8 border border-slate/5`}>
                <div className="text-center">
                  <p className="text-sm font-bold uppercase tracking-wider text-slate font-montserrat">{sample.trade}</p>
                  <p className="mt-2 text-xl font-bold text-navy font-montserrat">{sample.name}</p>
                  <div className="mt-4 px-4 py-2 bg-white rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity border border-slate/10">
                    <span className="text-sm font-bold text-navy font-montserrat">View Demo</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
