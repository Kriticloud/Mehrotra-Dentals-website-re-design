import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, MessageCircle } from 'lucide-react';

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
  };

  return (
    <section id="appointment" className="section-gap bg-brand-soft-blue/20">
      <div className="container-max">
        <div className="max-w-6xl mx-auto glass-card rounded-[3rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl border-none">
          {/* Left: Info */}
          <div className="bg-brand-primary p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <span className="text-secondary-fixed font-semibold tracking-widest uppercase text-xs mb-8 block">Inquiry & Booking</span>
            <h2 className="text-4xl md:text-5xl font-display font-light leading-tight mb-8">
              Start your <br />
              <span className="font-bold text-brand-secondary italic">smile journey.</span>
            </h2>
            <p className="text-white/60 mb-12 leading-relaxed">
              Fill out the form to request a consultation. Our clinical coordinator will reach out to confirm your slot within 2 business hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                 <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-brand-secondary" />
                 </div>
                 <div>
                    <div className="text-xs text-white/40 uppercase font-bold tracking-widest leading-none mb-1">WhatsApp Support</div>
                    <div className="text-xl font-display font-bold">+91 99359 59333</div>
                 </div>
              </div>
              
              <div className="pt-10 border-t border-white/10">
                 <div className="flex -space-x-4 mb-6">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-brand-primary bg-white overflow-hidden shadow-xl">
                        <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="Doctor" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                 </div>
                 <p className="text-sm font-semibold">Join 15,000+ happy patients</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="p-12 md:p-20 flex items-center bg-white/90">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center w-full"
              >
                <div className="w-20 h-20 bg-brand-secondary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-10 h-10 text-brand-secondary" />
                </div>
                <h3 className="text-3xl font-display font-bold text-brand-primary mb-4">Request Sent!</h3>
                <p className="text-brand-primary/60">Thank you for choosing Mehrotra Dentals. We'll speak with you shortly.</p>
                <button 
                   onClick={() => setSubmitted(false)}
                   className="mt-10 text-brand-secondary font-bold text-sm uppercase tracking-widest"
                >
                   Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-primary/40 uppercase tracking-widest pl-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-brand-neutral-grey rounded-2xl px-6 py-4 text-brand-primary font-medium outline-none focus:bg-white focus:ring-4 focus:ring-brand-secondary/5 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-primary/40 uppercase tracking-widest pl-2">Mobile Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+91"
                      className="w-full bg-brand-neutral-grey rounded-2xl px-6 py-4 text-brand-primary font-medium outline-none focus:bg-white focus:ring-4 focus:ring-brand-secondary/5 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-primary/40 uppercase tracking-widest pl-2">Service Required</label>
                  <select className="w-full bg-brand-neutral-grey rounded-2xl px-6 py-4 text-brand-primary font-medium outline-none focus:bg-white focus:ring-4 focus:ring-brand-secondary/5 transition-all appearance-none">
                    <option>Select Procedure</option>
                    <option>General Consultation</option>
                    <option>Dental Implants</option>
                    <option>Smile Designing / Makeover</option>
                    <option>Root Canal Treatment</option>
                    <option>Clear Aligners / Braces</option>
                    <option>Teeth Whitening</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-primary/40 uppercase tracking-widest pl-2">Nearest Location</label>
                  <select className="w-full bg-brand-neutral-grey rounded-2xl px-6 py-4 text-brand-primary font-medium outline-none focus:bg-white focus:ring-4 focus:ring-brand-secondary/5 transition-all appearance-none">
                    <option>Select City/Clinic</option>
                    <option>Kanpur - Mac Robert Gunj</option>
                    <option>Kanpur - Shastri Nagar</option>
                    <option>Lucknow - Hazratganj</option>
                    <option>Lucknow - Chowk</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-primary/40 uppercase tracking-widest pl-2">Message (Optional)</label>
                  <textarea 
                    rows={3}
                    placeholder="Tell us a bit about your concern..."
                    className="w-full bg-brand-neutral-grey rounded-2xl px-6 py-4 text-brand-primary font-medium outline-none focus:bg-white focus:ring-4 focus:ring-brand-secondary/5 transition-all"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-3 py-5 text-lg"
                >
                  Confirm Appointment
                  <Send className="w-5 h-5" />
                </button>
                
                <p className="text-[10px] text-center text-brand-primary/40 leading-relaxed max-w-xs mx-auto">
                  By clicking book, you agree to receive clinical follow-up calls or messages regarding your appointment.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
