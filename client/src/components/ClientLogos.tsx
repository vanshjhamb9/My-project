import { motion } from "framer-motion";

const clientLogos = [
  "LOGO", "BRAND", "CORP", "TECH", "FIRM", "GROUP", "INC", "LLC",
  "SOLUTIONS", "SYSTEMS", "DIGITAL", "VENTURES", "LABS", "WORKS", "STUDIO", "AGENCY"
];

export default function ClientLogos() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          We take a little pride in our solutions contributing to their{" "}
          <span className="text-gradient">growth</span>
        </motion.h2>
        
        {/* Animated Logo Ticker */}
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex space-x-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-32 h-20 glassmorphism rounded-xl flex items-center justify-center client-logo"
                whileHover={{ 
                  scale: 1.1,
                  filter: "grayscale(0%) opacity(1)",
                  y: -5 
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-lg font-bold text-primary">{logo}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
