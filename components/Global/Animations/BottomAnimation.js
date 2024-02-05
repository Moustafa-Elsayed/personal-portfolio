import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const BottomAnimation = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Allow the animation to repeat
    threshold: 0.1, // Adjust this threshold as needed for triggering the animation
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      // When in view, start the animation
      controls.start({
        opacity: 1,
        y: 0, // Move the element from the bottom (upward)
      });
    } else {
      // When out of view, reset the animation
      controls.start({
        opacity: 0,
        y: 100, // Move the element back to the bottom
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }} // Start the element at the bottom
      animate={controls}
      transition={{ duration: 0.8 }}
      className="scroll-animation"
    >
      {children}
    </motion.div>
  );
};

export default BottomAnimation;
