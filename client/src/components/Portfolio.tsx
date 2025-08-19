import { motion } from "framer-motion";
import { FaMobile, FaRobot, FaChartLine, FaCogs, FaRocket } from "react-icons/fa";

const portfolioSections = [
  {
    id: 1,
    title: "Mobile App Development",
    description: "Personalized, scalable, and intelligent apps built for impact.",
    icon: FaMobile,
    features: ["AI Integration", "Cross-platform", "Real-time Analytics", "Push Notifications"]
  },
  {
    id: 2,
    title: "AI Chatbot Development",
    description: "Conversational experiences to boost customer engagement & automate support.",
    icon: FaRobot,
    features: ["Natural Language Processing", "Multi-channel Support", "Learning Capabilities", "Custom Workflows"]
  },
  {
    id: 3,
    title: "AI First Adoption",
    description: "Custom strategies for rapid transformation.",
    icon: FaChartLine,
    features: ["Strategic Planning", "Implementation Roadmap", "Change Management", "ROI Optimization"]
  },
  {
    id: 4,
    title: "Agile Sprints",
    description: "Iterative development that adapts to your needs, ensures quality delivery, and minimizes time to value.",
    icon: FaCogs,
    features: ["2-week Sprints", "Continuous Feedback", "Quality Assurance", "Flexible Scope"]
  },
  {
    id: 5,
    title: "End-to-End Delivery",
    description: "From ideation to launch and beyond, we handhold clients through every stage.",
    icon: FaRocket,
    features: ["Full Lifecycle", "Post-launch Support", "Maintenance", "Scaling Assistance"]
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success in <span className="text-gradient gold-accent">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See success in action—discover our approach to AI-first adoption, mobile excellence, and agile delivery.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {portfolioSections.map((section, index) => (
            <motion.div
              key={section.id}
              className={`glassmorphism-strong rounded-3xl overflow-hidden hover-lift group ${
                section.id === 4 ? "lg:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              data-testid={`card-portfolio-${section.id}`}
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/10 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <section.icon className="text-5xl text-primary" />
                  </motion.div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">{section.title}</h3>
                <p className="text-muted-foreground mb-4">{section.description}</p>
                <div className="space-y-2">
                  {section.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>
                <motion.button 
                  className="mt-6 px-6 py-2 bg-primary text-black rounded-full font-semibold hover:bg-primary/80 transition-all"
                  whileHover={{ scale: 1.05 }}
                  data-testid={`button-explore-case-${section.id}`}
                >
                  Explore Case Studies
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center glassmorphism-strong p-12 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-primary">
            Ready to Transform Your Vision?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            From ideation to launch and beyond, we're your partners in digital transformation.
          </p>
          <motion.button 
            className="glassmorphism-strong px-12 py-4 rounded-full text-primary font-semibold hover:bg-primary hover:text-black transition-all duration-300 hover-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="button-start-project"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}