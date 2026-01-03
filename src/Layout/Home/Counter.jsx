import { animate, motion, useMotionValue, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ value, prefix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplay(Math.round(latest));
      },
    });

    return controls.stop;
  }, [isInView, value, motionValue]);

  return (
    <motion.span ref={ref}>
      {prefix}
      {display.toLocaleString()}
    </motion.span>
  );
};

export default Counter;
