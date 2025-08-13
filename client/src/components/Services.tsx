import { motion } from "framer-motion";
import { 
  FaCogs, 
  FaBrain, 
  FaDatabase, 
  FaUsers, 
  FaWifi, 
  FaSyncAlt, 
  FaHandshake, 
  FaTools 
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Robotics Development",
    description: "Cutting-edge robotic solutions that transform industries with intelligent automation and precision engineering.",
    icon: FaCogs,
    special: true,
    colSpan: "lg:col-span-2"
  },
  {
    id: 2,
    title: "AI/ML Development",
    description: "Intelligent systems powered by machine learning algorithms.",
    icon: FaBrain,
    special: false,
    colSpan: ""
  },
  {
    id: 3,
    title: "Data Science",
    description: "Transform raw data into actionable business insights.",
    icon: FaDatabase,
    special: false,
    colSpan: ""
  },
  {
    id: 4,
    title: "Hire Resources",
    description: "Skilled professionals for your technology needs.",
    icon: FaUsers,
    special: false,
    colSpan: ""
  },
  {
    id: 5,
    title: "IoT Solutions",
    description: "Connected devices for smart environments.",
    icon: FaWifi,
    special: false,
    colSpan: ""
  },
  {
    id: 6,
    title: "Legacy Migration",
    description: "Modernize your existing systems seamlessly.",
    icon: FaSyncAlt,
    special: false,
    colSpan: ""
  },
  {
    id: 7,
    title: "IT Consulting",
    description: "Strategic technology guidance for growth.",
    icon: FaHandshake,
    special: false,
    colSpan: ""
  },
  {
    id: 8,
    title: "Support & Maintenance",
    description: "Ongoing support for optimal performance.",
    icon: FaTools,
    special: false,
    colSpan: ""
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We help you achieve your business objectives with the right technology, strategy and people.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                className={`glassmorphism p-6 service-card hover:border-primary transition-all duration-500 ${
                  service.special ? "robotics-special lg:col-span-2" : ""
                } ${service.special ? "hover-glow" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: service.special ? 1.02 : 1.05,
                  y: -10 
                }}
              >
                <div className={`${
                  service.special ? 'h-40' : 'h-32'
                } bg-gradient-to-br from-primary/30 to-violet-light/30 rounded-2xl mb-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className={`${
                        service.special ? 'text-6xl' : 'text-4xl'
                      } text-primary`} />
                    </motion.div>
                  </div>
                  <div className={`absolute ${
                    service.special ? 'top-4 left-4 text-lg' : 'top-3 left-3'
                  } text-primary font-bold`}>
                    {String(service.id).padStart(2, '0')}
                  </div>
                </div>
                <h3 className={`${
                  service.special ? 'text-2xl' : 'text-xl'
                } font-bold mb-4 text-primary`}>
                  {service.title}
                </h3>
                <p className={`text-muted-foreground ${
                  service.special ? 'mb-6 leading-relaxed' : 'text-sm mb-4'
                }`}>
                  {service.description}
                </p>
                <motion.a 
                  href="#" 
                  className={`text-primary hover:text-violet-light transition-colors duration-300 font-semibold ${
                    service.special ? '' : 'text-sm'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  Know More <span className="ml-2">→</span>
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
