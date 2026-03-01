import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award } from 'lucide-react';

const certificates = [
  { title: 'Conduct UX Research and Test Early Concepts', issuer: 'Google' },
  { title: 'Build Wireframes and Low-Fidelity Prototypes', issuer: 'Google' },
  { title: 'Foundations of User Experience (UX) Design', issuer: 'Google' },
  { title: 'Getting Started with Microsoft Excel', issuer: 'Coursera Project Network' },
  { title: 'Start the UX Design Process: Empathize, Define, and Ideate', issuer: 'Coursera' },
];

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certificates" className="section-padding py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase block mb-3">Credentials</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Certificates
          </h2>
        </motion.div>

        <div className="space-y-0">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex items-start gap-4 md:gap-6 py-6 border-b border-border hover:border-primary/40 transition-colors duration-300"
            >
              <div className="flex-shrink-0 mt-1">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4">
                <h3 className="font-body font-500 text-foreground text-base md:text-lg group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>
                <span className="font-body text-sm text-muted-foreground flex-shrink-0">
                  {cert.issuer}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
