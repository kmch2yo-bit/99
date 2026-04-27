import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-brand-accent font-medium tracking-widest uppercase text-xs mb-4 block">
              EST. 2024 — OUR HOPE, OUR LOVE
            </span>
            <h2 className="text-6xl md:text-8xl font-serif font-light leading-tight mb-8 tracking-tighter">
              Curated <br />
              <span className="italic font-normal">Vintage</span> <br />
              Treasures
            </h2>
            <p className="text-brand-ink/60 max-w-md text-lg leading-relaxed mb-10">
              Discover a collection of heartwarming items created with love. 
              We bring you a unique blend of cute and vintage aesthetics for your daily life.
            </p>
            <div className="flex space-x-4">
              <button className="px-8 py-4 bg-brand-olive text-white rounded-full font-medium tracking-wide hover:bg-brand-olive/90 transition-all transform hover:scale-105">
                Shop Collection
              </button>
              <button className="px-8 py-4 border border-brand-ink/20 rounded-full font-medium tracking-wide hover:bg-brand-ink hover:text-white transition-all transform hover:scale-105">
                Our Story
              </button>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10"
            >
              <img 
                src="https://picsum.photos/seed/9hope-hero/800/1000" 
                alt="Vintage Boutique" 
                className="rounded-t-[200px] rounded-b-[40px] w-full h-[600px] object-cover vintage-shadow"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-32 h-32 border border-brand-accent/30 rounded-full flex items-center justify-center pointer-events-none"
            >
              <span className="text-[10px] font-display font-bold tracking-[0.2em] text-brand-accent uppercase text-center p-4">
                Handmade • Crafted • With • Love •
              </span>
            </motion.div>
            
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-accent/10 rounded-full blur-3xl z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
