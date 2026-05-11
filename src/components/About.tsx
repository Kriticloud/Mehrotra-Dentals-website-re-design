import { motion } from 'motion/react';
import { History, Award, Users, Heart } from 'lucide-react';

const values = [
  {
    icon: History,
    title: "Established 1985",
    description: "Built on 38+ years of clinical trust and generational expertise."
  },
  {
    icon: Award,
    title: "MDS Specialists",
    description: "Our team consists of highly qualified MDS doctors in every department."
  },
  {
    icon: Users,
    title: "Family First",
    description: "We treat every patient like a member of our own family."
  },
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Modern dentistry delivered with extreme empathy and comfort."
  }
];

export default function About() {
  return (
    <section id="about" className="section-gap bg-brand-neutral-grey/30">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden">
               <img 
                 src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
                 alt="Clinic Interior"
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
            </div>
            <div className="absolute -bottom-10 -right-10 glass-card p-10 rounded-[2rem] max-w-xs hidden md:block">
               <div className="text-4xl font-display font-bold text-brand-secondary mb-2">Since 1985</div>
               <p className="text-sm text-brand-primary/60">Founded by Dr. Anil Kumar Mehrotra, now a three-generation legacy of dental excellence.</p>
            </div>
          </div>

          <div>
             <span className="text-sm font-semibold text-brand-secondary uppercase tracking-[0.2em] mb-4 block">Our Story</span>
             <h2 className="text-4xl md:text-5xl font-display font-light text-brand-primary leading-tight mb-8">
               A legacy of trust, <br />
               <span className="font-bold">three generations deep.</span>
             </h2>
             <p className="text-lg text-brand-primary/70 mb-12 leading-relaxed">
               Mehrotra Dentals has been at the forefront of dental innovation in India for over three decades. 
               What started as a specialized clinic has expanded into two cities, 
               driven by a commitment to conservative treatment and specialized surgical excellence.
             </p>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
               {values.map((item, index) => (
                 <motion.div 
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   className="flex gap-5"
                 >
                   <div className="bg-white p-3 rounded-2xl shadow-sm h-fit">
                      <item.icon className="w-6 h-6 text-brand-secondary" />
                   </div>
                   <div>
                     <h4 className="font-bold text-brand-primary mb-1">{item.title}</h4>
                     <p className="text-sm text-brand-primary/50">{item.description}</p>
                   </div>
                 </motion.div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
