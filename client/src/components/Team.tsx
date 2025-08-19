import { motion } from "framer-motion";
import { TeamAvatar, StatsDisplay } from "./CreativeAssets";

const teamMembers = [
  {
    name: "Alex Chen",
    role: "AI Research Lead",
    specialty: "Machine Learning & Neural Networks"
  },
  {
    name: "Sarah Johnson",
    role: "Mobile Development Director", 
    specialty: "React Native & iOS/Android"
  },
  {
    name: "David Kumar",
    role: "Full-Stack Architect",
    specialty: "Cloud Infrastructure & APIs"
  },
  {
    name: "Maria Rodriguez",
    role: "UX/UI Design Lead",
    specialty: "Product Design & User Experience"
  },
  {
    name: "James Wilson",
    role: "DevOps Engineer",
    specialty: "CI/CD & System Architecture"
  },
  {
    name: "Lisa Zhang",
    role: "Data Science Manager",
    specialty: "Analytics & Business Intelligence"
  }
];

const companyStats = [
  { label: "Projects Delivered", value: "200+", icon: "🚀" },
  { label: "Happy Clients", value: "150+", icon: "😊" },
  { label: "Years Experience", value: "8+", icon: "⭐" },
  { label: "Team Members", value: "25+", icon: "👥" }
];

export default function Team() {
  return (
    <section id="team" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-gradient-visible">Expert Team</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of AI specialists, developers, and designers brings years of experience 
            in building cutting-edge solutions that drive real business results.
          </p>
        </motion.div>

        {/* Company Stats */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <StatsDisplay stats={companyStats} />
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <TeamAvatar {...member} />
              <div className="mt-4 text-center">
                <p className="text-white/60 text-sm leading-relaxed">{member.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership Message */}
        <motion.div
          className="glassmorphism-strong p-12 rounded-3xl text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-cyan-500/5"></div>
          <div className="relative z-10">
            <motion.div
              className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <span className="text-black font-bold text-2xl">NC</span>
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-6">
              "Innovation Through Collaboration"
            </h3>
            <p className="text-lg text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
              At Neural Coder AI, we believe the best solutions emerge when diverse minds collaborate. 
              Our team combines technical expertise with creative thinking to deliver AI solutions 
              that not just meet today's challenges but anticipate tomorrow's opportunities.
            </p>
            <div className="flex justify-center gap-4">
              <motion.button 
                className="glassmorphism px-8 py-3 rounded-full text-primary font-semibold hover:bg-primary hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-join-team"
              >
                Join Our Team
              </motion.button>
              <motion.button 
                className="border border-primary px-8 py-3 rounded-full text-primary font-semibold hover:bg-primary hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-meet-leadership"
              >
                Meet Leadership
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}