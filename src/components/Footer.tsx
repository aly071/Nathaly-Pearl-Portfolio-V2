import { motion } from 'framer-motion';

const Footer = () => (
  <footer className="section-padding py-8 border-t border-border">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-body text-sm text-muted-foreground"
      >
        © 2026 Nathaly Pearl F. Salanatin. All rights reserved.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-body text-xs text-muted-foreground/60"
      >
        Designed with love and countless cups of matcha ♥
      </motion.p>
    </div>
  </footer>
);

export default Footer;
