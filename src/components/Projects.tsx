import { useState } from 'react';
import ProjectCase from './ProjectCase';
import ImageLightbox from './ImageLightbox';

const projects = [
  {
    title: 'TUP Navigate',
    description:
      'TUP Navigate is a campus navigation system designed to help students easily locate buildings, classrooms, and offices.',
    tools: ['Figma', 'UI/UX', 'Prototyping'],
    gallery: [
      '/images/tup-navigate.png',
      '/images/AI.png',
      '/images/AI1.png',
      '/images/AI2.png',
      '/images/AI3.png',
      '/images/AI4.png',
      '/images/AI5.png',
    ],
    mainImage: '/images/tup-navigate.png',
    projectType: 'app', 
    liveUrl: null,
  },
  {
    title: 'Descry',
    description:
      'A skincare analysis app using facial scanning to detect skin conditions and recommend remedies.',
    tools: ['Figma', 'UI/UX Design', 'Prototyping'],
    gallery: [
      '/images/faceribil.png',
      '/images/faceribil1.png',
      '/images/faceribil2.png',
      '/images/faceribil3.png',
      '/images/faceribil4.png',
      '/images/faceribil5.png',
    ],
    mainImage: '/images/faceribil.png',
    projectType: 'app', 
    liveUrl: null,
  },
  {
    title: 'Wedding Management',
    description:
      'A web app providing wedding schedules, RSVP functionality, gallery, and event details.',
    tools: ['Figma', 'UI/UX', 'Prototyping', 'Canva'],
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
    mainImage: '/images/js1.png',
    projectType: 'website',
    liveUrl: 'https://naestephakajohn.vercel.app/',
  },
  {
    title: 'Code Assessment',
    description:
      'A platform for evaluating programming assignments using rubric-based fuzzy logic.',
    tools: ['Canva', 'Adobe Illustrator', 'Figma'],
    gallery: [
      '/images/code1.png',
      '/images/code2.png',
      '/images/code3.png',
    ],
    mainImage: '/images/code1.png',
    projectType: 'website', 
    liveUrl: null,
  },
  {
    title: 'Talkie-Chum',
    description:
      'An AI-powered assistant app designed for meetings, calls, messaging, and smart conversations.',
    tools: ['Figma', 'UI/UX Design', 'Prototyping'],
    gallery: [
      '/images/Talkie-chum.png',
      '/images/chum1.png',
      '/images/chum2.png',
      '/images/chum3.png',
    ],
    mainImage: '/images/Talkie-chum.png',
    projectType: 'website',
    liveUrl: null,
  },
  {
    title: 'Portfolio V1',
    description:
      'A responsive portfolio website showcasing skills, projects, and certifications.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    gallery: [
      '/images/portfoliov1.png',
      '/images/port1.png',
      '/images/port2.png',
      '/images/port3.png',
      '/images/port4.png',
    ],
    mainImage: '/images/portfoliov1.png',
    projectType: 'website',
    liveUrl: 'https://aly071.github.io/aly071-v1/',
  },
  {
    title: 'Onboarding System',
    description:
      'A web-based onboarding platform with digital forms, training modules, dashboards, and reminders.',
    tools: ['ASP.NET MVC', 'C#', 'UI/UX Design', 'Figma'],
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
    mainImage: '/images/Onboarding.png',
    projectType: 'website',
    liveUrl: null,
  },
  {
    title: 'Social Media Design',
    description:
      'Graphics created for social media branding, engagement, and marketing communication.',
    tools: ['Canva', 'Adobe Illustrator'],
    gallery: [
      '/images/socmed1.png',
      '/images/socmed2.png',
      '/images/socmed3.png',
    ],
    mainImage: '/images/dental.png',
    projectType: 'website', 
    liveUrl: null,
  },
  {
    title: 'Wedding Invitation',
    description:
      "An elegant wedding invitation layout with romantic typography and clean aesthetics.",
    tools: ['Canva'],
    gallery: [
      '/images/wedding.png',
      '/images/wed1.jpg',
      '/images/wed2.jpg',
      '/images/wed3.jpg',
      '/images/wed4.png',
    ],
    mainImage: '/images/wedding.png',
    projectType: 'website', 
    liveUrl: null,
  },
  {
    title: 'Food Ad Design',
    description:
      'A visually enticing food advertisement combining bold typography and vibrant imagery.',
    tools: ['Canva', 'Adobe Illustrator'],
    gallery: ['/images/Matcha.png'],
    mainImage: '/images/Matcha.png',   
    projectType: 'website',            
    liveUrl: null,
  }
];

const layouts = ['left', 'right', 'center'];

const Projects = () => {
  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number | null;
  }>({
    images: [],
    index: null,
  });

  return (
    <section className="bg-black text-white">
      {projects.map((project, i) => (
        <ProjectCase
          key={project.title}
          project={{
            ...project,
            layout: layouts[i % layouts.length],
          }}
          onImageClick={(index: number) =>
            setLightbox({
              images: project.gallery,
              index,
            })
          }
        />
      ))}

      <ImageLightbox
        images={lightbox.images}
        index={lightbox.index}
        onClose={() =>
          setLightbox({ images: [], index: null })
        }
      />
    </section>
  );
};

export default Projects;