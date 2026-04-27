import { motion } from 'motion/react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-cream pt-24 pb-12 border-t border-brand-ink/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 text-center md:text-left">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-serif font-bold tracking-tighter mb-6">9.hope</h2>
            <p className="text-brand-ink/60 text-sm leading-relaxed mb-8">
              Connecting you with items that bring a smile. <br />
              Vintage vibes for a modern life.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-brand-ink/40 hover:text-brand-ink transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-brand-ink/40 hover:text-brand-ink transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-brand-ink/40 hover:text-brand-ink transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-brand-ink/40 hover:text-brand-ink transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-[11px] uppercase tracking-widest text-brand-ink mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-brand-ink/60 font-medium">
              <li><a href="#" className="hover:text-brand-ink transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-brand-ink transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-brand-ink transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-brand-ink transition-colors">Living</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-[11px] uppercase tracking-widest text-brand-ink mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-brand-ink/60 font-medium">
              <li><a href="#" className="hover:text-brand-ink transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-brand-ink transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-brand-ink transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-brand-ink transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-[11px] uppercase tracking-widest text-brand-ink mb-6">Newsletter</h4>
            <p className="text-xs text-brand-ink/60 mb-6 font-medium">Join our mailing list for updates and vintage tips.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white border border-brand-ink/10 rounded-full py-4 px-6 text-sm focus:outline-none focus:border-brand-accent transition-colors"
              />
              <button className="absolute right-2 top-2 bg-brand-olive text-white p-2 rounded-full hover:bg-brand-olive/90 transition-colors">
                <motion.div whileHover={{ x: 3 }}><Mail size={20} /></motion.div>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-ink/5 pt-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-[10px] font-display font-bold text-brand-ink/30 uppercase tracking-[0.2em]">
            © 2026 9HOPE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-8 text-[10px] font-display font-bold text-brand-ink/30 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-brand-ink transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-ink transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
