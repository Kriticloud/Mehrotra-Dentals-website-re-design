import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

const locations = [
  {
    city: "Kanpur",
    clinics: [
      {
        name: "Mehrotra Super Speciality Dental Clinic",
        address: "Mac Robert Gunj, Kanpur, UP",
        phone: "+91 9935959333",
        map: "https://www.google.com/maps"
      },
      {
        name: "Mehrotra Hi-Tech Dental Centre",
        address: "Shastri Nagar, Kanpur, UP",
        phone: "+91 9451396943",
        map: "https://www.google.com/maps"
      }
    ]
  },
  {
    city: "Lucknow",
    clinics: [
      {
        name: "Hazratganj Clinic",
        address: "4A Park Road, Near Bank of Baroda, Lucknow",
        phone: "+91 9415040232",
        map: "https://www.google.com/maps"
      },
      {
        name: "Chowk Clinic",
        address: "Regency Awadh Building, Opp. Lohia Park, Lucknow",
        phone: "+91 9415040232",
        map: "https://www.google.com/maps"
      }
    ]
  }
];

export default function Locations() {
  return (
    <section id="locations" className="section-gap bg-white border-t border-brand-primary/5">
      <div className="container-max">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <div>
              <span className="text-sm font-semibold text-brand-secondary uppercase tracking-[0.2em] mb-4 block">Our Presence</span>
              <h2 className="text-4xl md:text-5xl font-display font-light text-brand-primary">
                Accessible <span className="font-bold">luxury care.</span>
              </h2>
           </div>
           <div className="flex flex-col gap-2 items-end">
              <div className="flex items-center gap-2 text-brand-primary font-bold">
                 <Clock className="w-5 h-5 text-brand-secondary" />
                 Mon-Sat: 11am–2pm | 6:30pm–8:30pm
              </div>
              <p className="text-xs text-brand-primary/40 uppercase tracking-widest font-bold">Saturday Evening by Appointment Only</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           {locations.map((loc, idx) => (
             <div key={idx} className="space-y-8">
                <div className="flex items-center gap-4 mb-10">
                   <div className="text-6xl font-display font-bold text-brand-primary/5 leading-none">{loc.city}</div>
                   <div className="h-px bg-brand-primary/5 flex-grow" />
                </div>
                
                <div className="grid gap-6">
                   {loc.clinics.map((clinic, cIdx) => (
                     <motion.div
                       key={cIdx}
                       whileHover={{ x: 10 }}
                       className="group p-8 rounded-[2rem] border border-brand-primary/5 hover:border-brand-secondary/30 transition-all hover:bg-brand-soft-blue/20"
                     >
                        <h4 className="text-xl font-bold text-brand-primary mb-4 group-hover:text-brand-secondary transition-colors">{clinic.name}</h4>
                        <div className="space-y-4">
                           <div className="flex gap-4 text-brand-primary/60">
                              <MapPin className="w-5 h-5 mt-1 shrink-0 text-brand-secondary" />
                              <p className="text-sm">{clinic.address}</p>
                           </div>
                           <div className="flex gap-4 text-brand-primary/60">
                              <Phone className="w-5 h-5 shrink-0 text-brand-secondary" />
                              <p className="text-sm font-bold">{clinic.phone}</p>
                           </div>
                        </div>
                        <a 
                          href={clinic.map}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-8 inline-flex items-center gap-2 text-xs font-bold text-brand-primary/40 group-hover:text-brand-secondary uppercase tracking-widest"
                        >
                          Find on Google Maps
                          <ArrowRight className="w-4 h-4" />
                        </a>
                     </motion.div>
                   ))}
                </div>
             </div>
           ))}
        </div>

        {/* Quick Contact Bar */}
        <div className="mt-20 glass-card p-8 rounded-[2rem] flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-brand-secondary" />
              <div>
                 <div className="text-xs text-brand-primary/40 uppercase font-bold tracking-widest leading-none mb-1">General Inquiries</div>
                 <div className="text-lg font-bold text-brand-primary">book@mehrotradentals.com</div>
              </div>
           </div>
           <div className="h-10 w-px bg-brand-primary/10 hidden md:block" />
           <div className="text-center md:text-left">
              <div className="text-xs text-brand-primary/40 uppercase font-bold tracking-widest leading-none mb-1">Central Helpline</div>
              <div className="text-lg font-bold text-brand-primary">+91 9935959333 / 9451396943</div>
           </div>
           <a href="https://wa.me/919935959333" target="_blank" rel="noopener noreferrer" className="btn-primary">
              WhatsApp Support
           </a>
        </div>
      </div>
    </section>
  );
}
