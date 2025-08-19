import { motion } from "framer-motion";
import { FaLightbulb, FaUsers, FaCogs, FaStar, FaBullseye, FaEye } from "react-icons/fa";
import LogoComponent from "./LogoComponent";
import { AIBrainNetwork, CircuitBoard, HolographicInterface } from "./CustomIllustrations";

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Mission and Vision Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div className="glassmorphism-strong p-8 rounded-2xl hover-lift mb-8">
              <FaBullseye className="text-4xl text-primary mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <h2 className="text-3xl font-bold mb-6">
                Redefine business performance through intelligent technology.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Empowering organizations to leap ahead through actionable AI, seamless digital experiences, and collaborative innovation.
              </p>
            </motion.div>

            <motion.div 
              className="glassmorphism-strong p-8 rounded-2xl hover-lift"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <FaEye className="text-4xl text-primary mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Be the global benchmark for transformative, AI-driven solutions, delivering measurable impact across industries and empowering businesses everywhere.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="glassmorphism-strong p-8 rounded-3xl text-center"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex flex-col items-center mb-8">
                <LogoComponent size="lg" showText={false} animate={true} className="mb-4" />
                <h2 className="text-4xl font-bold text-gradient-visible">Neural Coder AI</h2>
              </div>
              <div className="space-y-6">
                <motion.p 
                  className="text-lg text-primary font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  "Success begins where intelligence meets inspiration."
                </motion.p>
                <motion.p 
                  className="text-lg text-primary font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  "Building businesses, not just software."
                </motion.p>
                <motion.p 
                  className="text-lg text-primary font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  "Where your goals drive our innovation."
                </motion.p>
                <div className="mt-8 pt-8 border-t border-primary/20">
                  <p className="text-xl font-bold text-foreground">
                    We don't just build software—we invest our vision in your journey.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Partners Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-gradient-visible">Global Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Trusted by industry leaders worldwide
          </p>
          <div className="glassmorphism-strong p-12 rounded-3xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {['USA', 'UK', 'UAE', 'India'].map((location, index) => (
                <motion.div
                  key={location}
                  className="glassmorphism p-6 rounded-xl text-center hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-black">{location.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-primary">{location}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              className="glassmorphism-strong px-8 py-4 rounded-full text-primary font-semibold hover:bg-primary hover:text-black transition-all duration-300 hover-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-meet-team"
            >
              Meet Our Team
            </motion.button>
            <motion.button 
              className="border border-primary px-8 py-4 rounded-full text-primary font-semibold hover:bg-primary hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="button-collaborate"
            >
              Contact Us to Collaborate
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}