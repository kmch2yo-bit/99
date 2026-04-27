import { motion } from 'motion/react';
import { ShoppingBag, Search, Menu, Heart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-ink/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-8">
            <button className="lg:hidden text-brand-ink">
              <Menu size={24} />
            </button>
            <div className="hidden lg:flex space-x-6 text-sm font-medium tracking-wide uppercase">
              <a href="#" className="hover:text-brand-accent transition-colors">Shop</a>
              <a href="#" className="hover:text-brand-accent transition-colors">Archive</a>
              <a href="#" className="hover:text-brand-accent transition-colors">Editorial</a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-1/2 -translate-x-1/2"
          >
            <h1 className="text-3xl font-serif font-bold tracking-tighter text-brand-ink">
              9.hope
            </h1>
          </motion.div>

          <div className="flex items-center space-x-5">
            <button className="text-brand-ink hover:text-brand-accent transition-colors">
              <Search size={20} />
            </button>
            <button className="text-brand-ink hover:text-brand-accent transition-colors relative">
              <Heart size={20} />
            </button>
            <button className="text-brand-ink hover:text-brand-accent transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
