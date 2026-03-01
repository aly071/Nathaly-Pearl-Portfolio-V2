import { motion } from 'framer-motion';
import portraitImg from '@/assets/nathaly-portrait.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center section-padding pt-24 pb-16 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary font-body font-500 text-sm tracking-widest uppercase mb-4"
          >
            Portfolio — 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="heading-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-6"
          >
            Nathaly Pearl
            <br />
            <span className="text-primary">Salanatin</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-body-lg text-muted-foreground max-w-md mb-8"
          >
            Creative developer & designer crafting digital experiences with precision and purpose.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-4"
          >
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-6 py-3 bg-primary text-primary-foreground font-body font-500 text-sm rounded-sm hover:bg-primary/90 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-6 py-3 border border-border text-foreground font-body font-500 text-sm rounded-sm hover:border-primary hover:text-primary transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-72 md:w-80 lg:w-96">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-sm blur-2xl" />
            <img
              src={portraitImg}
              alt="Nathaly Pearl F. Salanatin"
              className="relative w-full aspect-[3/4] object-cover object-top rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
