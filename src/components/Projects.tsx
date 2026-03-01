import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'TUP Navigate',
    description: 'A campus navigation system...',
    tools: ['Figma', 'UI/UX', 'Prototyping'],
    category: 'UX Design',
    image: '/images/tup-navigate.png',
  },
  {
    title: 'Descry',
    description: 'A skincare analysis app that uses facial scanning to detect common skin conditions such as acne, dryness, or irritation. It provides instant results along with recommended home remedies.',
    tools: ['Figma', 'UI/UX Design', 'Prototyping'],
    category: 'UX Design',
    image: '/images/faceribil.png',
  },
  {
    title: 'Talkie-Chum',
    description: 'An AI-powered virtual assistant app — like Siri but smarter — designed to help you create meetings, make calls, send messages, and answer questions through natural, chat-based conversations.',
    tools: ['Figma', 'UI/UX Design', 'Prototyping'],
    category: 'UX Design',
    image: '/images/Talkie-chum.png',
  },
  {
    title: 'Personal Portfolio',
    description: 'A responsive website that showcases skills, projects, and certifications with modern design principles.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    category: 'Web Development',
    image: '/images/portfoliov1.png',
  },
  {
    title: 'Onboarding System',
    description: 'A web-based onboarding system that simplifies the integration of new employees. Features include digital form submission, training modules, role-based dashboards, and automated reminders.',
    tools: ['ASP.NET MVC', 'C#', 'UI/UX Design', 'Figma'],
    category: 'Full Stack',
    image: '/images/Onbording.png',
  },
  {
    title: 'Social Media Design',
    description: 'Visually engaging graphics created for social media platforms to promote brand identity, drive engagement, and communicate messages effectively across Instagram, Facebook, and more.',
    tools: ['Canva', 'Adobe Illustrator'],
    category: 'Graphic Design',
    image: '/images/dental.png',
  },
  {
    title: 'Wedding Invitation Layout',
    description: 'A clean and elegant wedding invitation layout designed to reflect the couple\'s theme and personality. Features classic typography and a romantic aesthetic for print and digital.',
    tools: ['Canva'],
    category: 'Graphic Design',
    image: '/images/wedding.png',
  },
  {
    title: 'Food Advertisement Design',
    description: 'A visually enticing food advertisement designed to highlight menu offerings and attract customer attention. Combines vibrant imagery, bold typography, and mouthwatering visuals.',
    tools: ['Canva', 'Adobe Illustrator'],
    category: 'Graphic Design',
    image: '/images/food.png',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group border-b border-border py-14"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

        {/* Image Column */}
        <div className="md:col-span-4 overflow-hidden rounded-xl">
          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[250px] md:h-[300px] object-cover rounded-xl transition-transform duration-500"
            />
          </motion.div>
        </div>

        {/* Content Column */}
        <div className="md:col-span-8 space-y-4">

          <span className="text-xs font-body text-primary tracking-widest uppercase">
            {project.category}
          </span>

          <h3 className="heading-editorial text-2xl md:text-3xl lg:text-4xl text-foreground group-hover:text-primary transition-colors duration-500">
            {project.title}
          </h3>

          <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs font-body px-2 py-1 border border-border text-muted-foreground rounded-sm"
              >
                {tool}
              </span>
            ))}
          </div>

        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding py-24 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase block mb-3">Selected Work</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Projects
          </h2>
        </motion.div>

        <div>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
