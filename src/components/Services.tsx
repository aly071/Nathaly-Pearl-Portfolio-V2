import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Front-end development using HTML5, CSS3, JavaScript with modern frameworks (React, Tailwind, etc.) to build responsive, performant websites.',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Graphics & Media',
    description: 'User interface design for web and mobile platforms using Figma and other design tools. From wireframes to high-fidelity mockups.',
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Data Entry & Analysis',
    description: 'Generate basic reports and insights using tools like Google Sheets and Excel. Efficient data organization and visualization.',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding py-24 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase block mb-3">What I Do</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Services I Offer
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group p-8 border border-border rounded-sm bg-card hover:border-primary/50 transition-all duration-500"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="heading-editorial text-xl md:text-2xl text-foreground mb-4">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
