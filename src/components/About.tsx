export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-navy font-bold tracking-wide uppercase font-montserrat">About Stockwell</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-navy sm:text-4xl font-montserrat">
            Modern Websites for Local Heroes
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate lg:mx-auto font-inter">
            We build affordable, professional websites for plumbers, electricians, salons, and local cafes. 
            No jargon, no hidden fees—just high-quality design that gets you noticed.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-light-grey p-8 rounded-lg border border-slate/10">
              <h3 className="text-xl font-bold text-navy mb-4 font-montserrat">Local First</h3>
              <p className="text-slate font-inter">Based in the North West, we understand the local market and what your customers are looking for.</p>
            </div>
            <div className="bg-light-grey p-8 rounded-lg border border-slate/10">
              <h3 className="text-xl font-bold text-navy mb-4 font-montserrat">Mobile Ready</h3>
              <p className="text-slate font-inter">Most customers will find you on their phone. All our sites are built to look great on every device.</p>
            </div>
            <div className="bg-light-grey p-8 rounded-lg border border-slate/10">
              <h3 className="text-xl font-bold text-navy mb-4 font-montserrat">Fast & Secure</h3>
              <p className="text-slate font-inter">Lightning-fast loading speeds and secure hosting so you never have to worry about your site going down.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
