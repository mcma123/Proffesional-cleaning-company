
import React from 'react';
import { motion } from 'framer-motion';
import { WhatsApp } from 'lucide-react';

export const WhatsAppButton = () => {
  // Phone number without any special characters
  const phoneNumber = '27714421210';
  
  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5C] text-white p-3.5 rounded-full shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contact us on WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
    >
      <WhatsApp className="h-6 w-6" />
    </motion.a>
  );
};

export default WhatsAppButton;
