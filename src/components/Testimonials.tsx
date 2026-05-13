import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-navy font-montserrat">What Our Clients Say</h2>
          <p className="mt-4 text-xl text-slate font-inter">Real feedback from local business owners.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-slate/10">
            <div className="flex text-navy mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="text-slate italic font-inter">"Stackwell transformed my business. I was getting all my leads from Facebook, but now I have a professional site that customers actually trust. Worth every penny."</p>
            <div className="mt-6">
              <p className="font-bold text-navy font-montserrat">John Smith</p>
              <p className="text-sm text-slate font-inter">JS Plumbing & Heating, Liverpool</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-slate/10">
            <div className="flex text-navy mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="text-slate italic font-inter">"I didn't think I needed a website, but after seeing what Stackwell did for my salon, I'm a believer. It's so easy for clients to find our services and location."</p>
            <div className="mt-6">
              <p className="font-bold text-navy font-montserrat">Sarah Jones</p>
              <p className="text-sm text-slate font-inter">The Beauty Bar, St Helens</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
