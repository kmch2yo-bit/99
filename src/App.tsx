/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <ProductGrid 
          title="Best Items" 
          subtitle="The most loved pieces from our collection" 
        />
        
        {/* About / Vision Section */}
        <section className="py-32 bg-brand-olive text-brand-cream overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <img 
                  src="https://picsum.photos/seed/9hope-vision/800/800" 
                  alt="Our Vision" 
                  className="rounded-full aspect-square object-cover vintage-shadow border-8 border-brand-cream/10"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-5xl font-serif mb-8 leading-tight">
                  "Our hope, our love" — <br />
                  <span className="italic font-light">Crafting stories through objects.</span>
                </h3>
                <p className="text-brand-cream/70 text-lg leading-relaxed mb-10 max-w-md">
                  9Hope is more than just a shop. It's a space where we share our love for 
                  the beautiful, the small, and the vintage. Every item is chosen to bring 
                  a little bit of hope and a lot of warmth into your space.
                </p>
                <div className="flex items-center space-x-6">
                  <div className="h-px w-12 bg-brand-cream" />
                  <span className="font-display font-bold tracking-[0.3em] uppercase text-xs">
                    Since 2024
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Decorative Background Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-serif font-bold opacity-[0.03] select-none pointer-events-none whitespace-nowrap">
            9HOPE Boutique
          </div>
        </section>

        <ProductGrid 
          title="New Arrivals" 
          subtitle="Freshly curated treasures just for you" 
        />

        {/* Instagram/Social Section */}
        <section className="py-24 bg-brand-cream/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl font-serif mb-4">Follow Our Journey</h3>
            <p className="text-brand-ink/50 italic mb-12">@9.hope_official</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="aspect-square relative overflow-hidden rounded-2xl group"
                >
                  <img 
                    src={`https://picsum.photos/seed/social-${i}/600/600`} 
                    alt="Social feed" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-olive/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
