import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

const teamMembers = [
  {
    name: "Manav Patel",
    position: "Founder & CEO",
  },
  {
    name: "Mihir Mistry",
    position: "CTO",
  },
  {
    name: "Sanjay Kidecha",
    position: "COO",
  },
  {
    name: "Nirav Panchal",
    position: "CMO",
  },
  {
    name: "Anchal Patel",
    position: "CGO",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Kody has a reputation as an egalitarian outsourcing company, and our management team stays in constant touch with Kody employees and clients.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="glassmorphism rounded-3xl p-6 text-center hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div 
                className="w-24 h-24 bg-gradient-to-br from-primary to-violet-light rounded-full mx-auto mb-4 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <FaUser className="text-2xl text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
              <p className="text-muted-foreground text-sm">{member.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
