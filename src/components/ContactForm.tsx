export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-extrabold text-navy font-montserrat">Ready to Get Started?</h2>
            <p className="mt-4 text-xl text-slate font-inter">
              Fill out the form and we'll get back to you within 24 hours with a custom quote for your project.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-navy/10 p-3 rounded-md">
                  <svg className="h-6 w-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-bold text-navy font-montserrat">Email us</p>
                  <p className="text-slate font-inter">hello@stackwell.studio</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-navy/10 p-3 rounded-md">
                  <svg className="h-6 w-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-bold text-navy font-montserrat">Call us</p>
                  <p className="text-slate font-inter">0151 123 4567</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <form className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="block text-sm font-bold text-slate font-montserrat uppercase tracking-wide">Full Name</label>
                <input type="text" id="full-name" className="mt-1 block w-full rounded-md border-slate/20 shadow-sm focus:border-navy focus:ring-navy bg-light-grey px-4 py-2 font-inter" />
              </div>
              <div>
                <label htmlFor="business" className="block text-sm font-bold text-slate font-montserrat uppercase tracking-wide">Business Name</label>
                <input type="text" id="business" className="mt-1 block w-full rounded-md border-slate/20 shadow-sm focus:border-navy focus:ring-navy bg-light-grey px-4 py-2 font-inter" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate font-montserrat uppercase tracking-wide">Email Address</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-slate/20 shadow-sm focus:border-navy focus:ring-navy bg-light-grey px-4 py-2 font-inter" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-slate font-montserrat uppercase tracking-wide">Phone Number</label>
                <input type="tel" id="phone" className="mt-1 block w-full rounded-md border-slate/20 shadow-sm focus:border-navy focus:ring-navy bg-light-grey px-4 py-2 font-inter" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate font-montserrat uppercase tracking-wide">What do you need?</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-slate/20 shadow-sm focus:border-navy focus:ring-navy bg-light-grey px-4 py-2 font-inter"></textarea>
              </div>
              <button type="submit" className="w-full bg-navy text-white px-6 py-3 rounded-md font-bold font-montserrat hover:bg-slate transition-colors uppercase tracking-widest">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
