import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Nitin Raj",
    location: "Kanpur",
    text: "The level of professionalism and care at Mehrotra Dentals is unmatched. Dr. Ankit explained every step of my implant surgery, making me feel completely at ease.",
    rating: 5
  },
  {
    name: "Naman Jain",
    location: "Lucknow",
    text: "I traveled from Lucknow for my smile designing and it was worth every mile. The technology they use is incredible. My smile looks so natural now!",
    rating: 5
  },
  {
    name: "Shadiya Shah",
    location: "Aesthetic Patient",
    text: "Absolutely stunning results. The doctors here aren't just clinicians, they are artists. My confidence has skyrocketed after the treatment.",
    rating: 5
  },
  {
    name: "Kashif Aijaz",
    location: "Implant Patient",
    text: "Best dental clinic in the region. Standardized hygiene and modern equipment. Highly recommend for any surgical dental needs.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="section-gap bg-brand-neutral-grey/50">
      <div className="container-max">
        <div className="text-center max-w-3xl mx-auto mb-20">
           <span className="text-sm font-semibold text-brand-secondary uppercase tracking-[0.2em] mb-4 block">Kind Words</span>
           <h2 className="text-4xl md:text-5xl font-display font-light text-brand-primary mb-6">
             Trust from <span className="font-bold">the heart.</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {reviews.map((rev, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="glass-card p-12 rounded-[2.5rem] relative group"
             >
                <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Quote className="w-16 h-16 text-brand-primary" />
                </div>
                
                <div className="flex gap-1 mb-8">
                   {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-secondary text-brand-secondary" />
                   ))}
                </div>

                <p className="text-lg text-brand-primary/70 mb-10 italic leading-relaxed">
                   "{rev.text}"
                </p>

                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-brand-secondary text-white flex items-center justify-center font-bold">
                      {rev.name[0]}
                   </div>
                   <div>
                      <h4 className="font-bold text-brand-primary">{rev.name}</h4>
                      <p className="text-xs text-brand-primary/40 uppercase font-bold tracking-widest">{rev.location}</p>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
