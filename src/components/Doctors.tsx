import { motion } from 'motion/react';
import { Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const doctors = [
  {
    name: "Dr. Anil Kumar Mehrotra",
    role: "Founder & Chief Orthodontist",
    specialty: "Braces & Oral Cancer Specialist",
    experience: "35+ Years",
    image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Dr. Ankit Mehrotra",
    role: "Director & CEO",
    specialty: "Prosthodontist & Implant Specialist",
    experience: "17+ Years",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Dr. Ankur Mehrotra",
    role: "Micro-Endodontist",
    specialty: "Root Canal & Laser Specialist",
    experience: "12+ Years",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
  }
];

const teamExtra = [
  { name: "Dr. Garima Mehrotra", role: "Pedodontist", desc: "Children Dentistry Specialist" },
  { name: "Dr. Akriti Goel", role: "Endodontist", desc: "Root Canal Expert (10+ Yrs)" },
  { name: "Dr. Vibhor Mahendru", role: "Surgical Oncologist", desc: "Cancer Surgery Specialist" }
];

export default function Doctors() {
  return (
    <section id="doctors" className="section-gap bg-brand-primary text-white overflow-hidden">
      <div className="container-max">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <div>
              <span className="text-secondary-fixed font-semibold tracking-widest uppercase text-xs mb-4 block">World-Class Faculty</span>
              <h2 className="text-4xl md:text-6xl font-display font-light leading-tight">
                Specialists <br />
                <span className="font-bold text-brand-secondary italic">at your service.</span>
              </h2>
           </div>
           <p className="text-white/60 max-w-sm mb-2">
             Collective clinical experience of over a century, dedicated to one thing: your oral health and smile aesthetics.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           {doctors.map((doc, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="group"
             >
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-8">
                   <img 
                      src={doc.image} 
                      alt={doc.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                   
                   <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                      <div className="bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                         <ArrowUpRight className="w-5 h-5" />
                      </div>
                      <div className="flex gap-2">
                         <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-brand-secondary transition-colors cursor-pointer">
                            <Linkedin className="w-4 h-4" />
                         </div>
                         <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-brand-secondary transition-colors cursor-pointer">
                            <Instagram className="w-4 h-4" />
                         </div>
                      </div>
                   </div>
                </div>
                
                <h3 className="text-2xl font-bold font-display mb-1">{doc.name}</h3>
                <p className="text-brand-secondary font-semibold text-sm uppercase tracking-wider mb-4">{doc.role}</p>
                <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                   <span className="text-xs text-white/40 uppercase font-bold">{doc.specialty}</span>
                   <span className="text-xs font-bold px-2 py-1 rounded bg-white/5">{doc.experience}</span>
                </div>
             </motion.div>
           ))}
        </div>

        <div className="mt-20 pt-20 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-12">
            {teamExtra.map((member, i) => (
              <div key={i} className="flex flex-col">
                 <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                 <p className="text-brand-secondary text-xs uppercase font-bold mb-2">{member.role}</p>
                 <p className="text-white/40 text-sm">{member.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
