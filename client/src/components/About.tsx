import { motion } from "framer-motion";
import { FaLightbulb, FaUsers, FaCogs, FaStar } from "react-icons/fa";

const philosophyPoints = [
  "Bad Design never yields a Great Product.",
  "False Compromise is a Catalyst for Chaos.",
  "Makeshift is not a Long-term Solution.",
  "Lays are Great, but not Delays.",
];

const successPoints = [
  "Designs that Make Sense",
  "Solutions that Boost Business Growth",
  "Digital Products that are Robust and Scalable",
  "Projects launched at the Right Time",
];

const molecules = [
  {
    title: "People",
    description: "The Essence of Development",
    icon: FaUsers,
  },
  {
    title: "Process",
    description: "Keeps Everything on Track",
    icon: FaCogs,
  },
  {
    title: "Experience",
    description: "Improves Rate of Success",
    icon: FaStar,
  },
];

export default function About() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Philosophy Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              It's not about money, it's about having the right solution at the right time.
            </h2>
            <div className="space-y-6">
              {philosophyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="glassmorphism p-6 rounded-2xl hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <h3 className="text-xl font-bold text-primary mb-2">{point}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="glassmorphism p-8 rounded-3xl animate-float"
              whileHover={{ rotateY: 10 }}
            >
              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 9 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={`h-20 rounded-xl flex items-center justify-center ${
                      i === 4
                        ? "bg-gradient-to-br from-primary to-violet-light"
                        : "bg-gradient-to-br from-primary/30 to-violet-light/30"
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {i === 4 && <FaLightbulb className="text-white text-2xl" />}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Digital Success Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            We ensure your <span className="text-gradient">digital success</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {successPoints.map((point, index) => (
              <motion.div
                key={index}
                className="glassmorphism p-6 rounded-2xl text-center hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <h3 className="text-xl font-bold text-primary mb-2">{point}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Molecules */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            A great solution is never a coincidence; it's built when the following{" "}
            <span className="text-gradient">molecules</span> fall into place.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {molecules.map((molecule, index) => {
              const Icon = molecule.icon;
              return (
                <motion.div
                  key={index}
                  className="glassmorphism p-8 rounded-3xl hover-lift"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <div className="h-32 bg-gradient-to-br from-primary/20 to-violet-light/20 rounded-2xl mb-6 flex items-center justify-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="text-5xl text-primary" />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{molecule.title}</h3>
                  <p className="text-muted-foreground">{molecule.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
