import { motion } from "framer-motion";
import { useState } from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaArrowRight } from "react-icons/fa";

const serviceLinks = [
  "Robotics Development",
  "AI/ML Development",
  "Data Science",
  "IoT Solutions",
];

const companyLinks = [
  "About Us",
  "Portfolio",
  "Team",
  "Careers",
];

const socialLinks = [
  { icon: FaLinkedin, href: "#" },
  { icon: FaTwitter, href: "#" },
  { icon: FaFacebook, href: "#" },
  { icon: FaInstagram, href: "#" },
];

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", newsletterEmail);
    setNewsletterEmail("");
  };

  return (
    <footer className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="glassmorphism rounded-3xl p-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gradient mb-4">KodyTechnoLab</h3>
              <p className="text-muted-foreground mb-4">Digitizing the world with innovation.</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 glassmorphism rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
            
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-primary mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                {serviceLinks.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <a href="#" className="hover:text-primary transition-colors duration-300">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-primary mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                {companyLinks.map((link, index) => (
                  <motion.li key={index} whileHover={{ x: 5 }}>
                    <a href="#" className="hover:text-primary transition-colors duration-300">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-primary mb-4">Newsletter</h4>
              <p className="text-muted-foreground mb-4 text-sm">
                Stay updated with our latest innovations
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex">
                <input
                  type="email"
                  placeholder="Enter email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 p-3 rounded-l-xl bg-transparent border border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-white placeholder-gray-400 text-sm"
                  required
                />
                <motion.button
                  type="submit"
                  className="px-4 py-3 bg-gradient-to-r from-primary to-violet-light rounded-r-xl hover:from-violet-light hover:to-primary transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaArrowRight />
                </motion.button>
              </form>
            </motion.div>
          </div>
          
          <motion.div 
            className="border-t border-primary/20 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">
                &copy; 2024 KodyTechnoLab. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <motion.p 
                  className="text-primary font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  #Differentiator
                </motion.p>
                <motion.p 
                  className="text-primary font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  #Customer-centric
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
