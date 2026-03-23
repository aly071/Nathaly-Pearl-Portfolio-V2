import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ── Types ──────────────────────────────────────────────────────────────────
interface Project {
  title: string;
  category: string;
  description: string;
  tools: string[];
  gallery: string[];
  mainImage: string;
  liveUrl: string | null;
  filter: string;
  size: 'tall' | 'wide' | 'standard' | 'poster';
}

const projects: Project[] = [
  {
    title: 'TUP Navigate',
    category: 'UI/UX Design • Mobile',
    description: 'TUP Navigate is a campus navigation system designed to help students easily locate buildings, classrooms, and offices.',
    tools: ['Figma', 'UI/UX', 'Prototyping'],
    gallery: [
      '/images/tup-navigate.png',
      '/images/AI.png',
      '/images/AI1.png',
      '/images/AI2.png',
      '/images/AI3.png',
      '/images/AI4.png',
      '/images/AI5.png'
    ],
    mainImage: '/images/tup-navigate.png',
    liveUrl: 'https://www.figma.com/proto/mgyZyDaJlipccnKLLUXJyv/TUP-Navigate?node-id=2-398&p=f&t=TJwjcPcs22jZ2Tp0-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A398&show-proto-sidebar=1',
    filter: 'app',
    size: 'wide',
  },
  {
    // wide (reference)
    title: 'Descry',
    category: 'UI/UX Design • Mobile',
    description: 'A skincare analysis app using facial scanning to detect skin conditions and recommend remedies.',
    tools: ['Figma', 'UI/UX Design', 'Prototyping'],
    gallery: ['/images/faceribil.png', '/images/faceribil1.png', '/images/faceribil2.png', '/images/faceribil3.png', '/images/faceribil4.png', '/images/faceribil5.png'],
    mainImage: '/images/faceribil.png',
    liveUrl: 'https://www.figma.com/proto/fRcQOhrxARfQ4VlZKQ5gNA/Face-Ribil?node-id=261-254&p=f&t=K3g9ZGubhUEFKmE3-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=261%3A254',
    filter: 'app',
    size: 'wide',
  },
  {
    // unchanged → standard
    title: 'Wedding Management',
    category: 'Web Development • React',
    description: 'A web app providing wedding schedules, RSVP functionality, gallery, and event details.',
    tools: ['Figma', 'UI/UX', 'Canva', 'Typescript', 'Tailwind CSS', 'React'],
    gallery: ['/images/js1.png', '/images/js2.png', '/images/js3.png', '/images/js4.png', '/images/js5.png', '/images/js6.png', '/images/js7.png', '/images/js8.png'],
    mainImage: '/images/js1.png',
    liveUrl: 'https://naestephakajohn.vercel.app/',
    filter: 'web',
    size: 'standard',
  },
  {
    // same as Onboarding → wide
    title: 'Code Assessment',
    category: 'Web Development • Figma',
    description: 'A platform for evaluating programming assignments using rubric-based fuzzy logic.',
    tools: ['Canva', 'Adobe Illustrator', 'Figma'],
    gallery: ['/images/code1.png', '/images/code2.png', '/images/code3.png'],
    mainImage: '/images/code1.png',
    liveUrl: null,
    filter: 'web',
    size: 'wide',
  },
  {
    // same as Onboarding → wide
    title: 'Talkie-Chum',
    category: 'UI/UX Design • Prototyping',
    description: 'An AI-powered assistant app designed for meetings, calls, messaging, and smart conversations.',
    tools: ['Figma', 'UI/UX Design', 'Prototyping'],
    gallery: ['/images/Talkie-chum.png', '/images/chum1.png', '/images/chum2.png', '/images/chum3.png'],
    mainImage: '/images/Talkie-chum.png',
    liveUrl: 'https://www.figma.com/design/WZ7t91jWFmAudwPsPGNoTp/AUTOMATA-?node-id=0-1&t=G6LmLCWmxWMjOZVH-1',
    filter: 'app',
    size: 'wide',
  },
  {
    // same as Onboarding → wide
    title: 'Portfolio V1',
    category: 'Web Development • Bootstrap',
    description: 'A responsive portfolio website showcasing skills, projects, and certifications.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    gallery: ['/images/portfoliov1.png', '/images/port2.png', '/images/port3.png', '/images/port4.png'],
    mainImage: '/images/portfoliov1.png',
    liveUrl: 'https://aly071.github.io/aly071-v1/',
    filter: 'web',
    size: 'wide',
  },
  {
    // wide (reference)
    title: 'Onboarding System',
    category: 'Web Development • ASP.NET',
    description: 'A web-based onboarding platform with digital forms, training modules, dashboards, and reminders.',
    tools: ['ASP.NET MVC', 'C#', 'UI/UX Design', 'Figma'],
    gallery: ['/images/Onboarding.png', '/images/o1.png', '/images/o2.png', '/images/o3.png', '/images/o4.png', '/images/o5.png', '/images/o6.png', '/images/o7.png'],
    mainImage: '/images/Onboarding.png',
    liveUrl: 'https://www.figma.com/design/ZpdZtv69BU107hocLYIeaG/Paramount?node-id=0-1&t=nKWk7jlhOvlhujcJ-1',
    filter: 'web',
    size: 'wide',
  },
  {
    title: 'Dear Future Me',
    category: 'UI/UX Design • Web Development • ',
    description: 'Dear Future Me is a cute and interactive web application that allows users to write a letter to their future selves',
    tools: ['Figma', 'UI/UX', 'Prototyping', 'Canva'],
    gallery: ['/images/Future.png', '/images/Future1.png', '/images/Future2.png', '/images/Future3.png', '/images/Future4.png', '/images/Future5.png'],
    mainImage: '/images/Future.png',
    liveUrl: 'https://dear-future-me-five.vercel.app/',
    filter: 'app',
    size: 'wide',
  },
  {
    // same as Descry → wide
    title: 'Social Media Design',
    category: 'Graphics • Branding',
    description: 'Graphics created for social media branding, engagement, and marketing communication.',
    tools: ['Canva', 'Adobe Illustrator'],
    gallery: ['/images/socmed1.png', '/images/socmed2.png', '/images/socmed3.png'],
    mainImage: '/images/dental.png',
    liveUrl: null,
    filter: 'graphics',
    size: 'wide',
  },
  {
    // same as Descry → wide
    title: 'Wedding Invitation',
    category: 'Graphics • Print',
    description: 'An elegant wedding invitation layout with romantic typography and clean aesthetics.',
    tools: ['Canva'],
    gallery: ['/images/wedding.png', '/images/wed1.jpg', '/images/wed2.jpg', '/images/wed3.jpg', '/images/wed4.png'],
    mainImage: '/images/wedding.png',
    liveUrl: null,
    filter: 'graphics',
    size: 'wide',
  },
  {
    title: 'Food Ad Design',
    category: 'Graphics • Advertising',
    description: 'A visually enticing food advertisement combining bold typography and vibrant imagery.',
    tools: ['Canva', 'Adobe Illustrator'],
    gallery: ['/images/Matcha.png'],
    mainImage: '/images/Matcha.png',
    liveUrl: null,
    filter: 'graphics',
    size: 'wide',
  },
  {
    title: 'Poster',
    category: 'Graphics • Print',
    description:
      'A visually enticing advertisement combining bold typography and vibrant imagery.',
    tools: ['Canva', 'Adobe Illustrator'],
    gallery: ['/images/socmed4.png', '/images/socmed5.png'],
    mainImage: '/images/socmed4.png',
    liveUrl: 'https://www.canva.com/design/DAHC-MNDcAw/DxLWv9RBn3iha5fQp1hR6A/edit?utm_content=DAHC-MNDcAw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    filter: 'graphics',
    size: 'tall', 
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'App', value: 'app' },
  { label: 'Web', value: 'web' },
  { label: 'Graphics', value: 'graphics' },
];

const colClasses: Record<string, string> = {
  tall:     'md:col-span-4',
  wide:     'md:col-span-8',
  standard: 'md:col-span-4',
  poster:   'md:col-span-8',
};

const aspectClasses: Record<string, string> = {
  tall:     'aspect-[3/4]',
  wide:     'aspect-[21/9]',
  standard: 'aspect-square',
  poster:   'aspect-square md:aspect-[21/9]',
};

function Lightbox({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const images = project.gallery.length ? project.gallery : [project.mainImage];
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [images.length, onClose]);

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={handleBackdrop}
    >
      <div className="relative w-full max-w-4xl flex flex-col items-center gap-4">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/50 hover:text-white text-sm tracking-widest uppercase transition-colors"
        >
          ✕ Close
        </button>

        <div className="relative w-full overflow-hidden rounded-2xl bg-white/5">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              alt={project.title}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="w-full max-h-[70vh] object-contain"
            />
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-primary/80 text-white flex items-center justify-center transition-colors text-lg"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-primary/80 text-white flex items-center justify-center transition-colors text-lg"
              >
                ›
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex gap-2 flex-wrap justify-center">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  i === current ? 'border-primary scale-105' : 'border-white/10 opacity-50 hover:opacity-80'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.filter === activeFilter);

  return (
    <section id="projects" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="text-primary text-sm tracking-widest uppercase block mb-3 font-medium">
              My Work
            </span>
            <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter italic">
              My Projects
            </h2>
            <p className="text-white/40 text-lg font-light mt-4 max-w-md leading-relaxed">
              A curated showcase of design and development work — from mobile apps to web platforms and visual design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-6 border-b border-white/10 pb-2 self-end"
          >
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`text-xs tracking-widest uppercase font-semibold pb-2 border-b-2 transition-all duration-300 ${
                  activeFilter === f.value
                    ? 'text-primary border-primary'
                    : 'text-white/30 border-transparent hover:text-white/60'
                }`}
              >
                {f.label}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`group cursor-pointer ${colClasses[project.size]}`}
                onClick={() => setSelected(project)}
              >
                <div className={`relative overflow-hidden rounded-2xl bg-white/5 ${aspectClasses[project.size]}`}>
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {project.gallery.length > 1 && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                      <div className="flex -space-x-1.5">
                        {project.gallery.slice(1, 4).map((img, idx) => (
                          <img key={idx} src={img} alt="" className="w-5 h-5 rounded-full object-cover border border-white/20" />
                        ))}
                      </div>
                      <span className="text-white text-[10px] font-semibold tracking-wider">
                        +{project.gallery.length - 1}
                      </span>
                    </div>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute top-3 right-3 bg-primary text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary/80"
                    >
                      Live ↗
                    </a>
                  )}
                </div>

                <div className="mt-4 px-1">
                  <h3 className="text-white text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/35 text-xs font-medium uppercase tracking-[0.18em] mt-1">
                    {project.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-20 flex justify-center">
          <div className="h-px w-24 bg-primary/30" />
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <Lightbox project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;