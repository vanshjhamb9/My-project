import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingCTA from "./FloatingCTA";
import ScrollProgress from "./ScrollProgress";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingCTA />
      
      {/* Floating Particles Background */}
      <div className="floating-particles fixed inset-0 pointer-events-none">
        {Array.from({ length: 9 }).map((_, i) => (
          <div 
            key={i}
            className="particle" 
            style={{
              left: `${(i + 1) * 10}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}
