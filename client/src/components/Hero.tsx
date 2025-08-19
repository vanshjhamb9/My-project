import { motion } from "framer-motion";
import { FaBrain, FaCogs, FaRocket } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative blob-bg pt-20 marble-bg">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Empower Your Business with {" "}
              <span className="text-gradient gold-accent">
                AI, Innovation & Impact
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Unlock scalable growth with world-class AI, mobile solutions, and industry expertise built for tomorrow's challenges.
            </motion.p>
            <motion.p 
              className="text-lg text-primary font-semibold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Your vision. Our technology. Shared success.
            </motion.p>
            <motion.p 
              className="text-base text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Neural Coder AI transforms ambition into reality. We deliver intelligent solutions—from AI-powered apps to full-stack development—that elevate your business, turbocharge productivity, and drive measurable outcomes. Our collaborative, customer-first approach makes us your trusted partner for digital transformation, wherever in the world you do business.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button 
                className="glassmorphism-strong px-8 py-4 rounded-full text-primary font-semibold hover:bg-primary hover:text-black transition-all duration-300 hover-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-consultation"
              >
                Request Free Consultation
              </motion.button>
              <motion.button 
                className="border border-primary px-8 py-4 rounded-full text-primary font-semibold hover:bg-primary hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-portfolio"
              >
                See Our Portfolio
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="animate-float"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl blur-3xl" />
              <motion.div 
                className="relative glassmorphism-strong p-8 rounded-3xl hover-lift"
                whileHover={{ rotateY: 5 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <FaBrain className="text-6xl text-primary mb-4" />
                </motion.div>
                <div className="grid grid-cols-3 gap-2">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-8 h-8 rounded ${
                        i === 4 ? "bg-primary" : "glassmorphism"
                      }`}
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}