import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgressComponent() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  return (
    <motion.div
      className="absolute left-0 top-0 h-1 w-1"
      style={{
        background: "var(--primary-color)",
        transformOrigin: "0%",
        zIndex: 100,
        scaleX
      }}
    />
  );
}

export default ScrollProgressComponent;
