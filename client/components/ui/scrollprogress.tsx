// components/Scrollprogress.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Scrollprogress({ children, className = "" }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <motion.section ref={ref} style={{ scale, opacity }} className={className}>
      {children}
    </motion.section>
  );
}
