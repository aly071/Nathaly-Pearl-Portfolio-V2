import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiTypescript,
  SiFigma, SiBootstrap, SiCanva, SiAdobeillustrator, SiDotnet, SiSharp,
  SiGit, SiGithub
} from 'react-icons/si';
import LogoLoop from './LogoLoop';

const techLogos = [
  { node: <SiHtml5 />, title: 'HTML5' },
  { node: <SiCss3 />, title: 'CSS3' },
  { node: <SiJavascript />, title: 'JavaScript' },
  { node: <SiReact />, title: 'React' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS' },
  { node: <SiTypescript />, title: 'TypeScript' },
  { node: <SiFigma />, title: 'Figma' },
  { node: <SiBootstrap />, title: 'Bootstrap' },
  { node: <SiCanva />, title: 'Canva' },
  { node: <SiAdobeillustrator />, title: 'Illustrator' },
  { node: <SiDotnet />, title: '.NET' },
  { node: <SiSharp />, title: 'C#' },
  { node: <SiGit />, title: 'Git' },
  { node: <SiGithub />, title: 'GitHub' },
];

const techLogosWithTooltip = techLogos.map((logo) => ({
  ...logo,
  node: (
    <div className="group relative flex items-center justify-center">
      {logo.node}
      <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-body font-500 text-foreground/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 drop-shadow-md">
        {logo.title}
      </span>
    </div>
  ),
}));

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 md:py-32 overflow-hidden">
      <div className="section-padding max-w-7xl mx-auto mb-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-primary font-body text-sm tracking-widest uppercase block mb-3">Tech Stack</span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Skills & Tools
          </h2>
        </motion.div>
      </div>

      <div className="relative h-24 md:h-32 overflow-hidden">
        <LogoLoop
          logos={techLogosWithTooltip}
          speed={40}
          direction="left"
          logoHeight={48}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut={false}
          ariaLabel="Skills and technologies"
        />
      </div>

      <div className="relative h-24 md:h-32 overflow-hidden mt-4">
        <LogoLoop
          logos={[...techLogosWithTooltip].reverse()}
          speed={30}
          direction="right"
          logoHeight={40}
          gap={50}
          hoverSpeed={0}
          fadeOut={false}
          ariaLabel="Skills and technologies"
        />
      </div>
    </section>
  );
};

export default Skills;