import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1445527263019-d8368595273c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=2070&auto=format&fit=crop"
];

export default function ClinicExperience() {
  return (
    <section className="section-gap overflow-hidden">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-20">
           <span className="text-sm font-semibold text-brand-secondary uppercase tracking-[0.2em] mb-4 block">Our Environment</span>
           <h2 className="text-4xl md:text-5xl font-display font-light text-brand-primary mb-6">
             Clinical <span className="font-bold">serenity.</span>
           </h2>
           <p className="text-lg text-brand-primary/60">
             We’ve designed our spaces to evoke calm and comfort, ensuring your visit is as relaxing as a luxury retreat.
           </p>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-10 px-8 no-scrollbar scroll-smooth">
         {images.map((img, idx) => (
           <motion.div 
             key={idx}
             className="min-w-[300px] md:min-w-[500px] aspect-video rounded-[2.5rem] overflow-hidden"
             whileHover={{ scale: 0.98 }}
           >
              <img 
                src={img} 
                alt="Clinic Experience" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
           </motion.div>
         ))}
      </div>
    </section>
  );
}
