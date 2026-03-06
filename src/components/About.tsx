import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding py-24 md:py-32 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase block mb-3">About</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-12">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-body-lg text-muted-foreground mb-6">
              I'm Nathaly Pearl F. Salanatin — a passionate creative developer and designer with a focus on building beautiful, functional digital experiences.
            </p>
            <p className="text-body-lg text-muted-foreground mb-6">
              With a blend of design thinking and technical skills, I bridge the gap between aesthetics and functionality. I believe that great design isn't just about how things look — it's about how they work.
            </p>
            <p className="text-body-lg text-muted-foreground">
              From UI/UX prototyping to full-stack web development, I bring ideas to life with precision, creativity, and a user-centered approach.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-8"
          >
            {[
              { label: 'UI/UX Design', value: 90 },
              { label: 'Web Development', value: 85 },
              { label: 'Graphic Design', value: 80 },
              { label: 'Problem Solving', value: 88 },
            ].map((skill) => (
              <div key={skill.label}>
                <div className="flex justify-between mb-2">
                  <span className="font-body text-sm text-foreground">{skill.label}</span>
                  <span className="font-body text-sm text-muted-foreground">{skill.value}%</span>
                </div>
                <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.value}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
