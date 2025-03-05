
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: 'easeInOut'
    }
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut'
    }
  }
};

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
