import { motion } from "framer-motion";

// AI Neural Network Illustration
export const AINetworkIllustration = ({ animate = false }: { animate?: boolean }) => (
  <motion.svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    className="w-full h-full"
    animate={animate ? { rotate: [0, 360] } : {}}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  >
    {/* Neural nodes */}
    <motion.circle
      cx="60"
      cy="60"
      r="4"
      fill="url(#neuralGradient)"
      animate={animate ? { scale: [1, 1.2, 1] } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.circle cx="30" cy="30" r="3" fill="url(#nodeGradient)"
      animate={animate ? { scale: [1, 1.1, 1] } : {}}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
    />
    <motion.circle cx="90" cy="30" r="3" fill="url(#nodeGradient)"
      animate={animate ? { scale: [1, 1.1, 1] } : {}}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
    />
    <motion.circle cx="30" cy="90" r="3" fill="url(#nodeGradient)"
      animate={animate ? { scale: [1, 1.1, 1] } : {}}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
    />
    <motion.circle cx="90" cy="90" r="3" fill="url(#nodeGradient)"
      animate={animate ? { scale: [1, 1.1, 1] } : {}}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
    />
    
    {/* Neural connections */}
    <motion.path
      d="M30 30 L60 60 L90 30"
      stroke="url(#connectionGradient)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0, opacity: 0.3 }}
      animate={animate ? { pathLength: [0, 1, 0], opacity: [0.3, 0.8, 0.3] } : { pathLength: 1, opacity: 0.5 }}
      transition={{ duration: 3, repeat: Infinity }}
    />
    <motion.path
      d="M30 90 L60 60 L90 90"
      stroke="url(#connectionGradient)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0, opacity: 0.3 }}
      animate={animate ? { pathLength: [0, 1, 0], opacity: [0.3, 0.8, 0.3] } : { pathLength: 1, opacity: 0.5 }}
      transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
    />

    <defs>
      <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FFA500" />
      </linearGradient>
      <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#E5E5E5" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6" />
        <stop offset="50%" stopColor="#E5E5E5" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#FFD700" stopOpacity="0.6" />
      </linearGradient>
    </defs>
  </motion.svg>
);

// Circuit Board Illustration
export const CircuitBoardIllustration = ({ animate = false }: { animate?: boolean }) => (
  <motion.svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    className="w-full h-full"
  >
    {/* Circuit paths */}
    <motion.path
      d="M20 20 L100 20 L100 40 L80 40 L80 60 L100 60 L100 100 L20 100 L20 80 L40 80 L40 60 L20 60 Z"
      stroke="url(#circuitGradient)"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={animate ? { pathLength: [0, 1] } : { pathLength: 1 }}
      transition={{ duration: 4, repeat: animate ? Infinity : 0 }}
    />
    
    {/* Circuit nodes */}
    <motion.rect
      x="18" y="18" width="4" height="4" rx="1"
      fill="url(#nodeGradient)"
      animate={animate ? { scale: [1, 1.3, 1] } : {}}
      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
    />
    <motion.rect
      x="98" y="18" width="4" height="4" rx="1"
      fill="url(#nodeGradient)"
      animate={animate ? { scale: [1, 1.3, 1] } : {}}
      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
    />
    <motion.rect
      x="98" y="98" width="4" height="4" rx="1"
      fill="url(#nodeGradient)"
      animate={animate ? { scale: [1, 1.3, 1] } : {}}
      transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
    />
    <motion.rect
      x="18" y="98" width="4" height="4" rx="1"
      fill="url(#nodeGradient)"
      animate={animate ? { scale: [1, 1.3, 1] } : {}}
      transition={{ duration: 2, repeat: Infinity, delay: 2 }}
    />

    {/* Central processor */}
    <motion.rect
      x="50" y="50" width="20" height="20" rx="3"
      fill="url(#processorGradient)"
      stroke="url(#circuitGradient)"
      strokeWidth="1"
      animate={animate ? { 
        scale: [1, 1.05, 1],
        rotate: [0, 2, -2, 0]
      } : {}}
      transition={{ duration: 3, repeat: Infinity }}
    />

    <defs>
      <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#00FFFF" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#FFD700" stopOpacity="0.8" />
      </linearGradient>
      <linearGradient id="processorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1a1a1a" />
        <stop offset="100%" stopColor="#333" />
      </linearGradient>
    </defs>
  </motion.svg>
);

// Data Flow Illustration
export const DataFlowIllustration = ({ animate = false }: { animate?: boolean }) => (
  <motion.svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    className="w-full h-full"
  >
    {/* Data streams */}
    <motion.path
      d="M10 30 Q60 10 110 30"
      stroke="url(#streamGradient1)"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={animate ? {
        pathLength: [0, 1, 0],
        opacity: [0, 1, 0]
      } : { pathLength: 1, opacity: 0.7 }}
      transition={{ duration: 2, repeat: Infinity, delay: 0 }}
    />
    <motion.path
      d="M10 60 Q60 40 110 60"
      stroke="url(#streamGradient2)"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={animate ? {
        pathLength: [0, 1, 0],
        opacity: [0, 1, 0]
      } : { pathLength: 1, opacity: 0.7 }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
    />
    <motion.path
      d="M10 90 Q60 110 110 90"
      stroke="url(#streamGradient3)"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={animate ? {
        pathLength: [0, 1, 0],
        opacity: [0, 1, 0]
      } : { pathLength: 1, opacity: 0.7 }}
      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
    />

    {/* Data particles */}
    <motion.circle
      cx="20" cy="30" r="2"
      fill="#FFD700"
      animate={animate ? {
        x: [0, 80],
        opacity: [1, 0]
      } : {}}
      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
    />
    <motion.circle
      cx="20" cy="60" r="2"
      fill="#00FFFF"
      animate={animate ? {
        x: [0, 80],
        opacity: [1, 0]
      } : {}}
      transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
    />
    <motion.circle
      cx="20" cy="90" r="2"
      fill="#FF6B6B"
      animate={animate ? {
        x: [0, 80],
        opacity: [1, 0]
      } : {}}
      transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
    />

    <defs>
      <linearGradient id="streamGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#FFD700" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="streamGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#00FFFF" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="streamGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0.2" />
      </linearGradient>
    </defs>
  </motion.svg>
);

// Holographic Interface
export const HolographicInterface = ({ animate = false }: { animate?: boolean }) => (
  <motion.svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    className="w-full h-full"
  >
    {/* Holographic rings */}
    <motion.circle
      cx="60" cy="60" r="40"
      stroke="url(#holoGradient1)"
      strokeWidth="2"
      fill="none"
      animate={animate ? {
        scale: [1, 1.1, 1],
        rotate: [0, 360]
      } : {}}
      transition={{ duration: 8, repeat: Infinity }}
    />
    <motion.circle
      cx="60" cy="60" r="30"
      stroke="url(#holoGradient2)"
      strokeWidth="1.5"
      fill="none"
      animate={animate ? {
        scale: [1, 0.9, 1],
        rotate: [360, 0]
      } : {}}
      transition={{ duration: 6, repeat: Infinity }}
    />
    <motion.circle
      cx="60" cy="60" r="20"
      stroke="url(#holoGradient3)"
      strokeWidth="1"
      fill="none"
      animate={animate ? {
        scale: [1, 1.05, 1],
        rotate: [0, 180, 360]
      } : {}}
      transition={{ duration: 4, repeat: Infinity }}
    />

    {/* Central core */}
    <motion.circle
      cx="60" cy="60" r="8"
      fill="url(#coreGradient)"
      animate={animate ? {
        scale: [1, 1.2, 1],
        opacity: [0.8, 1, 0.8]
      } : {}}
      transition={{ duration: 2, repeat: Infinity }}
    />

    {/* Floating data points */}
    <motion.rect
      x="25" y="25" width="3" height="3" rx="1"
      fill="#FFD700"
      animate={animate ? {
        y: [0, -5, 0],
        opacity: [0.5, 1, 0.5]
      } : {}}
      transition={{ duration: 3, repeat: Infinity, delay: 0 }}
    />
    <motion.rect
      x="92" y="25" width="3" height="3" rx="1"
      fill="#00FFFF"
      animate={animate ? {
        y: [0, -5, 0],
        opacity: [0.5, 1, 0.5]
      } : {}}
      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
    />
    <motion.rect
      x="92" y="92" width="3" height="3" rx="1"
      fill="#FF6B6B"
      animate={animate ? {
        y: [0, -5, 0],
        opacity: [0.5, 1, 0.5]
      } : {}}
      transition={{ duration: 3, repeat: Infinity, delay: 2 }}
    />

    <defs>
      <linearGradient id="holoGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6" />
        <stop offset="50%" stopColor="#00FFFF" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#FFD700" stopOpacity="0.6" />
      </linearGradient>
      <linearGradient id="holoGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0.3" />
      </linearGradient>
      <linearGradient id="holoGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#FFD700" stopOpacity="0.2" />
      </linearGradient>
      <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#FFA500" />
      </linearGradient>
    </defs>
  </motion.svg>
);

// Abstract Waves
export const AbstractWaves = ({ animate = false }: { animate?: boolean }) => (
  <motion.svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    className="w-full h-full"
  >
    <motion.path
      d="M10 60 Q30 30 50 60 T90 60 T130 60"
      stroke="url(#waveGradient1)"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
      animate={animate ? {
        d: [
          "M10 60 Q30 30 50 60 T90 60 T130 60",
          "M10 60 Q30 90 50 60 T90 60 T130 60",
          "M10 60 Q30 30 50 60 T90 60 T130 60"
        ]
      } : {}}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.path
      d="M10 45 Q30 15 50 45 T90 45 T130 45"
      stroke="url(#waveGradient2)"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      animate={animate ? {
        d: [
          "M10 45 Q30 15 50 45 T90 45 T130 45",
          "M10 45 Q30 75 50 45 T90 45 T130 45",
          "M10 45 Q30 15 50 45 T90 45 T130 45"
        ]
      } : {}}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    />
    <motion.path
      d="M10 75 Q30 45 50 75 T90 75 T130 75"
      stroke="url(#waveGradient3)"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      animate={animate ? {
        d: [
          "M10 75 Q30 45 50 75 T90 75 T130 75",
          "M10 75 Q30 105 50 75 T90 75 T130 75",
          "M10 75 Q30 45 50 75 T90 75 T130 75"
        ]
      } : {}}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />

    <defs>
      <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#00FFFF" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#FFD700" stopOpacity="0.4" />
      </linearGradient>
      <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#FF6B6B" stopOpacity="0.4" />
      </linearGradient>
      <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#FFD700" stopOpacity="0.3" />
      </linearGradient>
    </defs>
  </motion.svg>
);