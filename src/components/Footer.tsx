import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white font-montserrat">Stockwell</Link>
            <p className="mt-4 text-light-grey/80 max-w-xs font-inter">
              Websites that work as hard as you do. Helping local businesses in Liverpool and the North West grow their online presence.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/60 font-montserrat">Quick Links</h3>
            <ul className="mt-4 space-y-2 font-inter">
              <li><Link href="#about" className="text-light-grey hover:text-white transition-colors">About</Link></li>
              <li><Link href="#services" className="text-light-grey hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#portfolio" className="text-light-grey hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="#contact" className="text-light-grey hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/60 font-montserrat">Follow Us</h3>
            <ul className="mt-4 space-y-2 font-inter">
              <li><a href="#" className="text-light-grey hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-light-grey hover:text-white transition-colors">Facebook</a></li>
              <li><a href="#" className="text-light-grey hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-light-grey/60 text-sm font-inter">
          <p>&copy; {new Date().getFullYear()} Stockwell Studio. All rights reserved.</p>
          <p className="mt-2">Made with &hearts; in the North West.</p>
        </div>
      </div>
    </footer>
  );
}
