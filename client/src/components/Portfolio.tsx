import { motion } from "framer-motion";
import { FaRobot, FaPlane, FaChartLine, FaShoppingCart, FaHeartbeat } from "react-icons/fa";

const portfolioItems = [
  {
    title: "Dasher",
    description: "Robotic Solution for Offices",
    icon: FaRobot,
  },
  {
    title: "Drone Surveillance Solution",
    description: "Hardware Integrated System",
    icon: FaPlane,
  },
  {
    title: "AI Stock Trading App",
    description: "Simplify Stock Trading for Everyone",
    icon: FaChartLine,
  },
  {
    title: "AI-Powered eCommerce Inventory Solution",
    description: "Real-Time eCommerce Inventory Control with AI",
    icon: FaShoppingCart,
  },
  {
    title: "Elder Healthcare Solution",
    description: "End-to-End Solution with Wearable App",
    icon: FaHeartbeat,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured <span className="text-gradient">Solutions</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="glassmorphism rounded-3xl overflow-hidden hover-lift group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-violet-light/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="text-5xl text-primary" />
                    </motion.div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <motion.a 
                    href="#" 
                    className="text-primary hover:text-violet-light transition-colors duration-300 font-semibold"
                    whileHover={{ x: 5 }}
                  >
                    Learn More <span className="ml-2">→</span>
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="glassmorphism px-8 py-4 rounded-full text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Checkout Our Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
