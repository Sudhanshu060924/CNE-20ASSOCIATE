

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

function Counter({ from = 0, to = 100, duration = 2 }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, []);

  return <motion.span>{rounded}</motion.span>;
}

export default Counter;
