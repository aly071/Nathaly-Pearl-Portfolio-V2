import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-7 h-7" />,
    title: 'Web Development',
    description:
      'Front-end development using HTML5, CSS3, JavaScript with modern frameworks (React, Tailwind, etc.) to build responsive, performant websites.',
    featured: false,
  },
  {
    icon: <Palette className="w-7 h-7" />,
    title: 'Graphics & Media',
    description:
      'User interface design for web and mobile platforms using Figma and other design tools. From wireframes to high-fidelity mockups.',
    featured: true,
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: 'Data Entry & Analysis',
    description:
      'Generate basic reports and insights using tools like Google Sheets and Excel. Efficient data organization and visualization.',
    featured: false,
  },
];

const additionalSkills = [
  'IT Support',
  'Administrative Work',
  'Excel',
  'Microsoft Office 365',
  'Active Directory',
  'Prototyping',
  'UI/UX',
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-body font-600 uppercase tracking-widest mb-4">
            What I Do
          </span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Services I Offer
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mt-4">
            A focused set of services I provide to help bring your digital vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`group flex flex-col p-8 rounded-xl border transition-all duration-300 hover:shadow-xl ${
                service.featured
                  ? 'bg-primary border-primary ring-2 ring-primary/20'
                  : 'bg-card border-border hover:border-primary/30 hover:shadow-primary/5'
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                  service.featured
                    ? 'bg-white/20 text-white'
                    : 'bg-primary/10 text-primary'
                }`}
              >
                {service.icon}
              </div>

              <h3
                className={`heading-editorial text-xl md:text-2xl mb-3 ${
                  service.featured ? 'text-white' : 'text-foreground'
                }`}
              >
                {service.title}
              </h3>

              <p
                className={`font-body text-sm leading-relaxed mt-auto ${
                  service.featured ? 'text-white/80' : 'text-muted-foreground'
                }`}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 pt-10 border-t border-border"
        >
          <p className="text-center text-muted-foreground text-xs font-body uppercase tracking-widest mb-8">
            Additional Skills
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 rounded-full border border-border bg-card text-sm font-body text-muted-foreground hover:-translate-y-0.5 transition-transform duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;