import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Folder from './Folder';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: 'TUP Navigate',
    description: 'TUP Navigate is our campus navigation system designed to help new students easily find their way around the university. Think of it as a Google Maps, but made specifically for TUP — showing you exactly where buildings, classrooms, offices, and key spots are located.',
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
    folderColor: '#8B5CF6',
  },
  {
    title: 'Wedding Management',
    description: 'This web app is created to celebrate the wedding of John Ferino and Stephanie. It provides family and friends with all the essential details about the wedding, including event schedules, venue information, RSVP functionality, gallery, and more.',
    tools: ['Figma', 'UI/UX', 'Prototyping', 'Canva'],
    category: 'UI/UX Design',
    gallery: [
      '/images/js1.png',
      '/images/js2.png',
      '/images/js3.png',
      '/images/js4.png',
      '/images/js5.png',
      '/images/js6.png',
      '/images/js7.png',
      '/images/js8.png',
    ],
    liveUrl: 'https://naestephakajohn.vercel.app/',
    folderColor: '#EC4899',
  },
  {
    title: 'Descry',
    description: 'A skincare analysis app that uses facial scanning to detect common skin conditions such as acne, dryness, or irritation. It provides instant results along with recommended home remedies.',
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
    folderColor: '#10B981',
  },
  {
    title: 'Code Assessment',
    description: 'A sophisticated platform for evaluating programming assignments using rubric-based fuzzy logic, providing fair and accurate assessments for your code.',
    tools: ['Canva', 'Adobe Illustrator', 'Figma'],
    category: 'UI/UX Design',
    gallery: [
      '/images/code1.png',
      '/images/code2.png',
      '/images/code3.png',
    ],
    liveUrl: null,
    folderColor: '#F59E0B',
  },
  {
    title: 'Talkie-Chum',
    description: 'An AI-powered virtual assistant app — like Siri but smarter — designed to help you create meetings, make calls, send messages, and answer questions through natural, chat-based conversations.',
    tools: ['Figma', 'UI/UX Design', 'Prototyping'],
    category: 'UX Design',
    gallery: [
      '/images/Talkie-chum.png',
      '/images/chum1.png',
      '/images/chum2.png',
      '/images/chum3.png',
    ],
    liveUrl: null,
    folderColor: '#6366F1',
  },
  {
    title: 'Portfolio V1',
    description: 'A responsive website that showcases skills, projects, and certifications with modern design principles.',
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
    folderColor: '#EF4444',
  },
  {
    title: 'Onboarding System',
    description: 'A web-based onboarding system that simplifies the integration of new employees. Features include digital form submission, training modules, role-based dashboards, and automated reminders.',
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
    folderColor: '#0EA5E9',
  },
  {
    title: 'Social Media Design',
    description: 'Visually engaging graphics created for social media platforms to promote brand identity, drive engagement, and communicate messages effectively.',
    tools: ['Canva', 'Adobe Illustrator'],
    category: 'Graphic Design',
    gallery: [
      '/images/dental.png',
      '/images/socmed1.png',
      '/images/socmed2.png',
      '/images/socmed3.png',
    ],
    liveUrl: null,
    folderColor: '#D946EF',
  },
  {
    title: 'Wedding Invitation',
    description: "A clean and elegant wedding invitation layout designed to reflect the couple's theme and personality. Features classic typography and a romantic aesthetic.",
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
    folderColor: '#F97316',
  },
  {
    title: 'Food Ad Design',
    description: 'A visually enticing food advertisement designed to highlight menu offerings and attract customer attention. Combines vibrant imagery, bold typography, and mouthwatering visuals.',
    tools: ['Canva', 'Adobe Illustrator'],
    category: 'Graphic Design',
    gallery: ['/images/food.png'],
    folderColor: '#14B8A6',
  },
];

const Projects = () => {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-50px' });

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const closeModal = () => {
    setSelectedProject(null);
    setActiveImageIndex(0);
  };

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="text-primary text-sm tracking-widest uppercase block mb-3">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Hover to peek inside, click to explore the full gallery.
          </p>
        </motion.div>

        {/* Folder Grid */}
        <motion.div
          ref={gridRef}
          initial={{ opacity: 0, y: 40 }}
          animate={gridInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-14 justify-items-center"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <Folder
                color={project.folderColor}
                size={1.8}
                label={project.title}
                onClick={() => {
                  setSelectedProject(project);
                  setActiveImageIndex(0);
                }}
                items={project.gallery.slice(0, 3).map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ))}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Reuse existing modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            activeImageIndex={activeImageIndex}
            setActiveImageIndex={setActiveImageIndex}
            onClose={closeModal}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
