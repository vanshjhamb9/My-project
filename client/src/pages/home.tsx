import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import EnhancedPortfolio from "@/components/EnhancedPortfolio";
import Services from "@/components/Services";
import About from "@/components/About";
import ClientLogos from "@/components/ClientLogos";
import Team from "@/components/Team";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <Layout>
      <Hero />
      <EnhancedPortfolio />
      <Services />
      <About />
      <ClientLogos />
      <Team />
      <Contact />
    </Layout>
  );
}
