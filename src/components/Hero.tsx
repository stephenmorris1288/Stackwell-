import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="font-montserrat">
              <span className="block text-sm font-bold uppercase tracking-wide text-slate sm:text-base lg:text-sm xl:text-base">
                Coming to Liverpool & The North West
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="block text-navy">Websites that work as</span>
                <span className="block text-slate">hard as you do</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-slate sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-inter">
              Professional, jargon-free website design for tradespeople and local businesses. 
              Built to grow your business while you focus on the job.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 font-montserrat">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href="#contact"
                  className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-white bg-navy hover:bg-slate md:py-4 md:text-lg md:px-10 transition-colors"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#services"
                  className="flex items-center justify-center px-8 py-3 border border-navy text-base font-bold rounded-md text-navy bg-white hover:bg-light-grey md:py-4 md:text-lg md:px-10 transition-colors"
                >
                  View Packages
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy">
                <div className="aspect-w-16 aspect-h-9 bg-slate/10 flex items-center justify-center">
                  <span className="text-slate font-montserrat font-bold">Sample Project Mockup</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
