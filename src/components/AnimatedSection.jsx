import React from "react";
import { motion } from "framer-motion";

function AnimatedSection({ children, delay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="mb-12"
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;