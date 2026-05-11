import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-brand-soft-blue/50 to-transparent blur-3xl opacity-60" />
      <div className="absolute -bottom-20 -left-20 -z-10 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl" />

      <div className="container-max grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary text-xs font-semibold uppercase tracking-wider mb-8">
            <ShieldCheck className="w-4 h-4" />
            Exceptional Care for Every Stage
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-light text-brand-primary leading-[1.1] mb-8">
            The art of <br />
            <span className="font-bold text-brand-secondary italic">modern dentistry.</span>
          </h1>
          
          <p className="text-lg text-brand-primary/60 max-w-lg mb-10 leading-relaxed">
            Experience advanced dental care powered by experienced specialists, 
            modern technology, and patient-first treatment. Transforming smiles in Kanpur & Lucknow since 1985.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a 
              href="#appointment" 
              className="btn-primary flex items-center gap-2 px-10 py-5 text-lg"
            >
              Book Appointment
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/919935959333" 
              className="flex items-center gap-3 px-8 py-5 text-brand-primary font-semibold hover:text-brand-secondary transition-colors"
            >
              <div className="bg-[#25D366]/10 p-2 rounded-full">
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
              </div>
              WhatsApp US
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-display font-bold text-brand-primary">17+</div>
              <div className="text-xs text-brand-primary/40 uppercase font-semibold">Years Exp.</div>
            </div>
            <div>
              <div className="text-2xl font-display font-bold text-brand-primary">15k+</div>
              <div className="text-xs text-brand-primary/40 uppercase font-semibold">Patients</div>
            </div>
            <div>
              <div className="text-2xl font-display font-bold text-brand-primary">38+</div>
              <div className="text-xs text-brand-primary/40 uppercase font-semibold">Legacy</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white drop-shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
              alt="Premium Patient Smile"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Glass Cards */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-8 bottom-12 z-20 glass-card p-6 rounded-2xl hidden lg:flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner">
               <ShieldCheck className="text-brand-secondary" />
            </div>
            <div>
              <div className="text-sm font-bold text-brand-primary">MDS Specialists</div>
              <div className="text-xs text-brand-primary/40">Only the best for you</div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-8 top-1/4 z-20 glass-card p-6 rounded-2xl hidden lg:flex items-center gap-4"
          >
             <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-brand-soft-blue overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Patient" referrerPolicy="no-referrer" />
                  </div>
                ))}
             </div>
            <div>
              <div className="text-sm font-bold text-brand-primary">1500+ Implants</div>
              <div className="text-xs text-brand-primary/40">Clinical Success</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
