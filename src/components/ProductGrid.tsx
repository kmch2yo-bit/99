import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    name: "Classic Bear Keyring",
    price: "12,000",
    category: "Accessories",
    image: "https://picsum.photos/seed/keyring/600/800",
    tag: "Best"
  },
  {
    id: 2,
    name: "Vintage Linen Tote",
    price: "28,000",
    category: "Bags",
    image: "https://picsum.photos/seed/bag/600/800",
    tag: "New"
  },
  {
    id: 3,
    name: "Handmade Ceramic Mug",
    price: "24,000",
    category: "Living",
    image: "https://picsum.photos/seed/mug/600/800",
    tag: "Best"
  },
  {
    id: 4,
    name: "Cozy Wool Socks",
    price: "8,000",
    category: "Apparel",
    image: "https://picsum.photos/seed/socks/600/800",
    tag: ""
  },
  {
    id: 5,
    name: "Floral Notebook Set",
    price: "15,000",
    category: "Stationery",
    image: "https://picsum.photos/seed/notebook/600/800",
    tag: "New"
  },
  {
    id: 6,
    name: "Vintage Brass Mirror",
    price: "45,000",
    category: "Living",
    image: "https://picsum.photos/seed/mirror/600/800",
    tag: ""
  }
];

export default function ProductGrid({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-4xl font-serif font-medium mb-2">{title}</h3>
            {subtitle && <p className="text-brand-ink/50 italic">{subtitle}</p>}
          </div>
          <a href="#" className="text-brand-ink font-medium border-b border-brand-ink/20 hover:border-brand-ink transition-all pb-1 text-sm tracking-wide uppercase">
            View All
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 lg:gap-x-10">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-5 bg-brand-cream aspect-[3/4] rounded-2xl">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-brand-olive text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.tag}
                  </span>
                )}
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-brand-ink hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Heart size={18} />
                </button>
              </div>
              
              <div className="space-y-1">
                <p className="text-[10px] font-display font-semibold text-brand-accent uppercase tracking-widest">
                  {product.category}
                </p>
                <div className="flex justify-between items-start">
                  <h4 className="text-lg font-medium group-hover:text-brand-accent transition-colors">
                    {product.name}
                  </h4>
                  <p className="font-serif text-lg">₩{product.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
