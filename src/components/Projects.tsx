import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    title: 'TUP Navigate',
    description: 'TUP Navigate is our campus navigation system designed to help new students easily find their way around the university. Think of it as a Google Maps, but made specifically for TUP — showing you exactly where buildings, classrooms, offices, and key spots are located. Whether youre looking for your next class or the nearest restroom, TUP Navigate has you covered.',
    tools: ['Figma', 'UI/UX', 'Prototyping'],
    category: 'UI/UX Design',
    gallery: [
      '/images/tup-navigate.png',
      '/images/AI.png',
      '/images/AI1.png',
      '/images/AI2.png',
      '/images/AI3.png',
      '/images/AI4.png',
      '/images/AI5.png',
    ],
    liveUrl: null,
  },
  {
    title: 'Wedding Management',
    description: 'This web app is created to celebrate the wedding of John Ferino and Stephanie. It provides family and friends with all the essential details about the wedding, including event schedules, venue information, RSVP functionality, gallery, and more..',
    tools: ['Figma', 'UI/UX', 'Prototyping', 'Canva'],
    category: 'UI/UX Design',
    gallery: [
      '/images/js1.png',
      '/images/js2.png',
      '/images/js3.png',
      '/images/js4.png',
      '/images/js5.png',
      '/images/js4.png',
      '/images/js5.png',
      '/images/js6.png',
      '/images/js7.png',
      '/images/js8.png',
    ],
    liveUrl: 'https://naestephakajohn.vercel.app/',
  },
  {
    title: 'Descry',
    description:
      'A skincare analysis app that uses facial scanning to detect common skin conditions such as acne, dryness, or irritation. It provides instant results along with recommended home remedies.',
    tools: ['Figma', 'UI/UX Design', 'Prototyping'],
    category: 'UI/UX Design',
    gallery: [
      '/images/faceribil.png',
      '/images/faceribil1.png',
      '/images/faceribil2.png',
      '/images/faceribil3.png',
      '/images/faceribil4.png',
      '/images/faceribil5.png',
    ],
    liveUrl: null,
  },
  {
    title: 'Code Assessment using Rubric-based Fuzzy Logic',
    description:
      'A sophisticated platform for evaluating programming assignments uisng rubric-based fuzzy logic, providing fair and accurate assessments for your code',
    tools: ['Canva', 'Adobe Illustrator', 'Figma'],
    category: 'UI/UX Design',
    gallery: [
      '/images/code1.png',
      '/images/code2.png',
      '/images/code3.png',
    ],
    liveUrl: null,
  },
  {
    title: 'Talkie-Chum',
    description:
      'An AI-powered virtual assistant app — like Siri but smarter — designed to help you create meetings, make calls, send messages, and answer questions through natural, chat-based conversations.',
    tools: ['Figma', 'UI/UX Design', 'Prototyping'],
    category: 'UX Design',
    gallery: [
      '/images/Talkie-chum.png',
      '/images/chum1.png',
      '/images/chum2.png',
      '/images/chum3.png',
    ],
    liveUrl: null,
  },
  {
    title: 'Personal Portfolio V1',
    description:
      'A responsive website that showcases skills, projects, and certifications with modern design principles.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    category: 'Web Development',
    gallery: [
      '/images/portfoliov1.png',
      '/images/port1.png',
      '/images/port2.png',
      '/images/port3.png',
      '/images/port4.png',
    ],
    liveUrl: 'https://aly071.github.io/aly071-v1/',
  },
  {
    title: 'Onboarding System',
    description:
      'A web-based onboarding system that simplifies the integration of new employees. Features include digital form submission, training modules, role-based dashboards, and automated reminders.',
    tools: ['ASP.NET MVC', 'C#', 'UI/UX Design', 'Figma'],
    category: 'Full Stack',
    gallery: [
      '/images/Onboarding.png',
      '/images/o1.png',
      '/images/o2.png',
      '/images/o3.png',
      '/images/o4.png',
      '/images/o5.png',
      '/images/o6.png',
      '/images/o7.png',
    ],
    liveUrl: null,
  },
  {
    title: 'Social Media Design',
    description:
      'Visually engaging graphics created for social media platforms to promote brand identity, drive engagement, and communicate messages effectively across Instagram, Facebook, and more.',
    tools: ['Canva', 'Adobe Illustrator'],
    category: 'Graphic Design',
    gallery: [
      '/images/dental.png',
      '/images/socmed1.png',
      '/images/socmed2.png',
      '/images/socmed3.png',
    ],
    liveUrl: null,
  },
  {
    title: 'Wedding Invitation Layout',
    description:
      'A clean and elegant wedding invitation layout designed to reflect the couple\'s theme and personality. Features classic typography and a romantic aesthetic for print and digital.',
    tools: ['Canva'],
    category: 'Graphic Design',
    gallery: [
      '/images/wedding.png',
      '/images/wed1.jpg',
      '/images/wed2.jpg',
      '/images/wed3.jpg',
      '/images/wed4.png',
    ],
    liveUrl: null,
  },
  {
    title: 'Food Advertisement Design',
    description:
      'A visually enticing food advertisement designed to highlight menu offerings and attract customer attention. Combines vibrant imagery, bold typography, and mouthwatering visuals.',
    tools: ['Canva', 'Adobe Illustrator'],
    category: 'Graphic Design',
    gallery: ['/images/food.png'],
  },
];

const ProjectCard = ({
  project,
  index,
  onClick,
}: {
  project: typeof projects[0];
  index: number;
  onClick: () => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group border-b border-border py-14 cursor-pointer"
      onClick={onClick}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

        {/* Preview Image — full image, no crop */}
        <div className="md:col-span-4 overflow-hidden rounded-xl bg-muted flex items-center justify-center">
          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 200 }}
            src={project.gallery[0]}
            alt={project.title}
            className="w-full h-auto max-h-[320px] object-contain rounded-xl"
          />
        </div>

        <div className="md:col-span-8 space-y-4">
          <span className="text-xs text-primary tracking-widest uppercase">
            {project.category}
          </span>
          <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-primary transition">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm md:text-base">
            {project.description}
          </p>

          {/* Tools — always visible */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="text-xs px-3 py-1 border border-border rounded-full text-muted-foreground"
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
  const headingInView = useInView(headingRef, { once: true });

  const [selectedProject, setSelectedProject] =
    useState<typeof projects[0] | null>(null);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const closeModal = () => {
    setSelectedProject(null);
    setActiveImageIndex(0);
  };

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="text-primary text-sm tracking-widest uppercase block mb-3">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Projects
          </h2>
        </motion.div>

        {/* Project List */}
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            onClick={() => {
              setSelectedProject(project);
              setActiveImageIndex(0);
            }}
          />
        ))}

        {/* Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-background max-w-5xl w-full rounded-2xl p-8 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>

              {/* Main Image — full image, no crop */}
              <div className="relative mb-6 bg-muted rounded-xl flex items-center justify-center">
                <motion.img
                  key={activeImageIndex}
                  src={selectedProject.gallery[activeImageIndex]}
                  alt={selectedProject.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-auto max-h-[500px] object-contain rounded-xl"
                />

                {/* Arrows */}
                {selectedProject.gallery.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setActiveImageIndex((prev) =>
                          prev === 0
                            ? selectedProject.gallery.length - 1
                            : prev - 1
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
                    >
                      ‹
                    </button>

                    <button
                      onClick={() =>
                        setActiveImageIndex((prev) =>
                          prev === selectedProject.gallery.length - 1
                            ? 0
                            : prev + 1
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {selectedProject.gallery.length > 1 && (
                <div className="flex gap-3 mb-6 overflow-x-auto">
                  {selectedProject.gallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`rounded-lg overflow-hidden border-2 flex-shrink-0 bg-muted ${
                        activeImageIndex === index
                          ? 'border-primary'
                          : 'border-transparent'
                      }`}
                    >
                      <img
                        src={img}
                        alt=""
                        className="w-20 h-20 object-contain"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Content */}
              <h3 className="text-3xl font-semibold mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-muted-foreground mb-6">
                {selectedProject.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-3 py-1 border border-border rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition"
                >
                  Visit Live Site →
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;