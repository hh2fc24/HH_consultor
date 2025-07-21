import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AtlasAssistant() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Image
        src="/images/Atlas1.png"
        alt="Atlas Assistant"
        width={120}
        height={120}
        className="rounded-full shadow-xl"
      />
    </motion.div>
  );
}