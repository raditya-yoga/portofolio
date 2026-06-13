import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MouseSpotlight() {
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Add smooth spring motion to follow the cursor elegantly
  const springConfig = { stiffness: 80, damping: 35 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      // Subtract 200px to center the 400px glow circle around the cursor
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkDevice);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, rgba(255, 0, 60, 0.03) 40%, rgba(0, 0, 0, 0) 70%)',
        pointerEvents: 'none',
        zIndex: 1,
        x: springX,
        y: springY,
      }}
    />
  );
}
