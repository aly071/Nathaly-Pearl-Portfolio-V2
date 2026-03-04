import { motion, AnimatePresence } from 'framer-motion';

export default function ImageLightbox({
  images,
  index,
  onClose,
}: any) {
  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.img
            src={images[index]}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="max-h-[85vh] rounded-xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}