import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from 'motion/react';
import { useEffect } from 'react';

export default function BackgroundShapes() {
  const { scrollYProgress } = useScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const maskImage = useMotionTemplate`radial-gradient(circle 350px at ${mouseX}px ${mouseY}px, black, transparent)`;

  // Transform values for different shapes based on window scroll progress
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 600]); // Moves down slowly
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]); // Moves up
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 800]); // Moves from top to bottom
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 500]); // Moves down
  const scaleCircle = useTransform(scrollYProgress, [0, 0.4], [1, 0]); // Circle shrinks entirely natively
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -360]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Glow / blurred orb 1 */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-brand-primary/30 blur-[150px] rounded-full"
      />

      {/* Glow / blurred orb 2 */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[80%] right-[-10%] w-[60vw] h-[60vw] bg-brand-accent/20 blur-[150px] rounded-full"
      />

      {/* Centered geometric shapes container to match Hero layout */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="max-w-7xl w-full h-screen relative px-6">
          {/* Geometric shape 1 (Square right behind hero image on the right) */}
          <motion.div
            style={{ y: y3 }}
            className="absolute top-[20%] sm:top-[15%] lg:top-[15%] right-[-15%] lg:right-[-8%] rtl:right-auto rtl:left-[-15%] rtl:lg:left-[-8%] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[480px] lg:h-[480px] border-[2px] border-brand-primary/40 rounded-[40px] opacity-70"
          >
            <motion.div 
               animate={{ rotate: 360 }} 
               transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
               className="w-full h-full border-[2px] border-brand-primary/40 rounded-[40px]"
            />
          </motion.div>

          {/* Geometric shape 2 (Circle right behind the big text on the left) */}
          <motion.div
            style={{ y: y1, scale: scaleCircle }}
            className="absolute top-[15%] lg:top-[20%] left-[-10%] lg:left-[-2%] rtl:left-auto rtl:right-[-10%] rtl:lg:right-[-2%] w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px] border-[2px] border-emerald-500/30 rounded-full opacity-60"
          >
            <motion.div 
               animate={{ rotate: -360 }} 
               transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
               className="w-full h-full border-[2px] border-emerald-500/30 rounded-full border-dashed"
            />
          </motion.div>
          
          {/* Geometric shape 3 (filled small square) */}
          <motion.div
            style={{ y: y4 }}
            className="absolute top-[75%] lg:top-[80%] left-[80%] lg:left-[70%] rtl:left-auto rtl:right-[80%] rtl:lg:right-[70%] w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-2xl"
          >
            <motion.div 
               animate={{ rotate: 360 }} 
               transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
               className="w-full h-full bg-gradient-to-br from-brand-primary/20 to-emerald-500/20 rounded-2xl backdrop-blur-3xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Dot Grid Layer (static base) */}
      <div 
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.05] opacity-20"
        style={{ 
          backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      />

      {/* Dot Grid Layer (expanded interactive on hover) */}
      <motion.div 
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.15] opacity-40 text-brand-primary"
        style={{ 
          backgroundImage: 'radial-gradient(currentColor 2.5px, transparent 1px)', 
          backgroundSize: '40px 40px',
          WebkitMaskImage: maskImage,
          maskImage: maskImage
        }}
      />
    </div>
  );
}
