import { motion } from "framer-motion";
import { useState } from "react";
import { FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

const offices = [
  { country: "INDIA", location: "Ahmedabad, Gujarat" },
  { country: "CANADA", location: "London, ON" },
  { country: "USA", location: "Fort Lauderdale, FL" },
  { country: "UK", location: "London" },
];

const services = [
  "Software Development",
  "Digital Transformation", 
  "Hire Resources",
  "IoT Solutions",
  "Legacy Solution Migration",
  "IT Consulting Services",
  "IT Support & Maintenance",
  "Other"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+1",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Let's Grow and Get{" "}
            <span className="text-gradient">Famous</span> Together.
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            className="glassmorphism rounded-3xl p-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-transparent border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-white placeholder-gray-400 transition-all duration-300"
                  required
                />
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-transparent border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-white placeholder-gray-400 transition-all duration-300"
                  required
                />
              </motion.div>
              
              <div className="flex gap-4">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="p-4 rounded-xl bg-transparent border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-white bg-background"
                >
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+91">+91</option>
                </select>
                <motion.input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 p-4 rounded-xl bg-transparent border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-white placeholder-gray-400 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  required
                />
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-transparent border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-white bg-background"
                  required
                >
                  <option value="">Select Service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 rounded-xl bg-transparent border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-white placeholder-gray-400 transition-all duration-300 resize-none"
                  required
                />
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-violet-light text-white font-semibold hover:from-violet-light hover:to-primary transition-all duration-300 animate-pulse-glow"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message <FaPaperPlane className="inline ml-2" />
              </motion.button>
            </form>
            <p className="text-sm text-muted-foreground mt-4">
              Note: Business inquiry only, check our{" "}
              <a href="#" className="text-primary hover:underline">
                Career page
              </a>{" "}
              for jobs.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glassmorphism rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              <div className="space-y-4">
                <motion.div whileHover={{ x: 10 }}>
                  <h4 className="font-semibold text-primary mb-2">Sales Inquiry</h4>
                  <a
                    href="tel:+919316756367"
                    className="text-muted-foreground hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <FaPhone className="mr-2" />
                    +91 93167 56367
                  </a>
                </motion.div>
                <motion.div whileHover={{ x: 10 }}>
                  <h4 className="font-semibold text-primary mb-2">Career Inquiry</h4>
                  <a
                    href="tel:+919377229944"
                    className="text-muted-foreground hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <FaPhone className="mr-2" />
                    +91 93772 29944
                  </a>
                </motion.div>
                <motion.div whileHover={{ x: 10 }}>
                  <h4 className="font-semibold text-primary mb-2">Email ID</h4>
                  <a
                    href="mailto:sales@kodytechnolab.com"
                    className="text-muted-foreground hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <FaEnvelope className="mr-2" />
                    sales@kodytechnolab.com
                  </a>
                </motion.div>
                <motion.div whileHover={{ x: 10 }}>
                  <h4 className="font-semibold text-primary mb-2">Skype</h4>
                  <a
                    href="skype:live:marketing_24881"
                    className="text-muted-foreground hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <FaSkype className="mr-2" />
                    kodytechnolab
                  </a>
                </motion.div>
              </div>
            </div>

            <div className="glassmorphism rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Global Offices</h3>
              <div className="grid grid-cols-2 gap-4">
                {offices.map((office, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-8 bg-gradient-to-r from-primary to-violet-light rounded mb-2 mx-auto" />
                    <h4 className="font-semibold text-primary">{office.country}</h4>
                    <p className="text-xs text-muted-foreground">{office.location}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
