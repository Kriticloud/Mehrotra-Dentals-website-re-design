import { Instagram, Facebook, Linkedin, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-32 pb-12 bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="text-3xl font-display font-light text-brand-primary">
              Mehrotra <span className="font-bold text-brand-secondary">Dentals</span>
            </div>
            <p className="text-brand-primary/60 text-sm leading-relaxed max-w-sm">
              Crafting premium smiles with clinical precision since 1985. 
              The leading name in aesthetic and restorative dentistry in North India.
            </p>
            <div className="flex gap-4">
               {[Instagram, Facebook, Linkedin, Youtube].map((Icon, idx) => (
                 <a 
                   key={idx} 
                   href="#" 
                   className="w-10 h-10 rounded-full border border-brand-primary/10 flex items-center justify-center text-brand-primary/60 hover:text-brand-secondary hover:border-brand-secondary transition-all"
                 >
                   <Icon className="w-5 h-5" />
                 </a>
               ))}
            </div>
          </div>

          <div>
             <h4 className="text-xs font-bold text-brand-primary uppercase tracking-[0.2em] mb-10">Procedures</h4>
             <ul className="space-y-4">
                {['Dental Implants', 'Smile Makeover', 'RCT Specialist', 'Invisalign', 'Cosmetic Dentistry'].map(item => (
                  <li key={item}>
                    <a href="#services" className="text-sm text-brand-primary/60 hover:text-brand-secondary transition-colors">{item}</a>
                  </li>
                ))}
             </ul>
          </div>

          <div>
             <h4 className="text-xs font-bold text-brand-primary uppercase tracking-[0.2em] mb-10">Quick Links</h4>
             <ul className="space-y-4">
                {['Book Appointment', 'Our Doctors', 'Legacy & Story', 'Patient Testimonials', 'Contact Us'].map(item => (
                  <li key={item}>
                    <a href="#" className="text-sm text-brand-primary/60 hover:text-brand-secondary transition-colors">{item}</a>
                  </li>
                ))}
             </ul>
          </div>

          <div>
              <h4 className="text-xs font-bold text-brand-primary uppercase tracking-[0.2em] mb-10">Hours</h4>
              <div className="space-y-6">
                 <div>
                    <div className="text-xs text-brand-primary/40 uppercase font-bold tracking-widest leading-none mb-2">Morning Shift</div>
                    <div className="text-sm font-bold text-brand-primary">Mon-Sat: 11:00 AM – 2:00 PM</div>
                 </div>
                 <div>
                    <div className="text-xs text-brand-primary/40 uppercase font-bold tracking-widest leading-none mb-2">Evening Shift</div>
                    <div className="text-sm font-bold text-brand-primary">Mon-Fri: 06:30 PM – 8:30 PM</div>
                 </div>
                 <p className="text-[10px] text-brand-primary/40 leading-relaxed italic">
                   *Saturday evening strictly by call-in appointment. Sunday closed.
                 </p>
              </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-primary/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-xs text-brand-primary/40 font-medium">
             © {currentYear} Mehrotra Dental & Implant Centre. All rights reserved.
           </p>
           <div className="flex gap-8">
              <a href="#" className="text-[10px] font-bold text-brand-primary/40 uppercase tracking-widest hover:text-brand-secondary">Privacy Policy</a>
              <a href="#" className="text-[10px] font-bold text-brand-primary/40 uppercase tracking-widest hover:text-brand-secondary">Terms of Service</a>
           </div>
           <div className="flex items-center gap-2 text-xs font-bold text-brand-primary/40">
              Designed with <Heart className="w-3 h-3 text-red-400 fill-current" /> for healthy smiles.
           </div>
        </div>
      </div>
    </footer>
  );
}
