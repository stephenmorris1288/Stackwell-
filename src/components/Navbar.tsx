import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-navy">
              Stockwell
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#about" className="text-slate hover:text-navy px-3 py-2 text-sm font-medium transition-colors">About</Link>
              <Link href="#services" className="text-slate hover:text-navy px-3 py-2 text-sm font-medium transition-colors">Services</Link>
              <Link href="#portfolio" className="text-slate hover:text-navy px-3 py-2 text-sm font-medium transition-colors">Portfolio</Link>
              <Link href="#contact" className="bg-navy text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate transition-colors">Get Started</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-navy p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
