import { motion } from 'motion/react';
import { 
  Sparkles, 
  Stethoscope, 
  Zap, 
  Shield, 
  Baby, 
  Settings, 
  Smile, 
  Scissors,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

const services = [
  {
    title: "Dental Implants",
    icon: Stethoscope,
    description: "World-class tooth replacement with biocompatible titanium implants.",
    highlight: true
  },
  {
    title: "Root Canal Treatment",
    icon: Zap,
    description: "Micro-Endodontics using advanced laser and rotary systems.",
    highlight: true
  },
  {
    title: "Smile Makeovers",
    icon: Sparkles,
    description: "Digital smile design and cosmetic veneers for a perfect aesthetic.",
    highlight: true
  },
  {
    title: "Invisalign & Braces",
    icon: Shield,
    description: "Discreet clear aligners and orthodontic solutions for all ages.",
    highlight: true
  },
  {
    title: "Pediatric Dentistry",
    icon: Baby,
    description: "Specialized, fear-free dental care for children and toddlers.",
    highlight: false
  },
  {
    title: "Full Mouth Rehab",
    icon: Settings,
    description: "Comprehensive reconstruction for complex restorative cases.",
    highlight: false
  },
  {
    title: "Teeth Whitening",
    icon: Smile,
    description: "Professional power bleaching for immediate radiant results.",
    highlight: false
  },
  {
    title: "Laser Dentistry",
    icon: Scissors,
    description: "Minimally invasive soft tissue procedures with faster healing.",
    highlight: false
  }
];

export default function Services() {
  return (
    <section id="services" className="section-gap">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-20">
           <span className="text-sm font-semibold text-brand-secondary uppercase tracking-[0.2em] mb-4 block">Specializations</span>
           <h2 className="text-4xl md:text-6xl font-display font-light text-brand-primary mb-6">
             Our clinical <span className="font-bold">ecosystem.</span>
           </h2>
           <p className="text-lg text-brand-primary/60">
             Every treatment is powered by domain specialists using the world's most advanced dental technology.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {services.map((service, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.05 }}
               className={cn(
                 "group relative p-10 rounded-[2rem] transition-all duration-500 hover:-translate-y-2",
                 service.highlight 
                   ? "bg-brand-primary text-white" 
                   : "bg-white border border-brand-primary/5 hover:border-brand-secondary/30"
               )}
             >
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110",
                  service.highlight ? "bg-white/10" : "bg-brand-soft-blue"
                )}>
                   <service.icon className={cn(
                     "w-7 h-7 font-bold", 
                     service.highlight ? "text-white" : "text-brand-secondary"
                   )} />
                </div>

                <h3 className="text-xl font-bold mb-4 font-display">{service.title}</h3>
                <p className={cn(
                   "text-sm mb-8 leading-relaxed",
                   service.highlight ? "text-white/60" : "text-brand-primary/40"
                )}>
                  {service.description}
                </p>

                <a 
                  href="#appointment" 
                  className={cn(
                    "flex items-center gap-2 text-sm font-bold transition-all",
                    service.highlight ? "text-brand-secondary hover:text-white" : "text-brand-secondary"
                  )}
                >
                  Explore Procedure
                  <ArrowRight className="w-4 h-4" />
                </a>
             </motion.div>
           ))}
        </div>

        <div className="mt-20 text-center">
           <div className="inline-flex flex-wrap justify-center gap-4 text-xs font-bold text-brand-primary/40 uppercase tracking-widest">
             <span>• General Dentistry</span>
             <span>• Prosthodontics</span>
             <span>• Oral & Maxillofacial Surgery</span>
             <span>• Periodontics</span>
             <span>• Crown & Bridges</span>
             <span>• Complete Dentures</span>
           </div>
        </div>
      </div>
    </section>
  );
}
