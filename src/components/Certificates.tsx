import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award } from 'lucide-react';

const certificates = [
  { 
    title: 'Conduct UX Research and Test Early Concepts', 
    issuer: 'Google',
    link: 'https://coursera.org/share/5af83f1f0adab71eab62dadce539c8f4'
  },
  { 
    title: 'Build Wireframes and Low-Fidelity Prototypes', 
    issuer: 'Google',
    link: 'https://coursera.org/share/e2efbf1c19dca282a982df14e908d913' 
  },
  { 
    title: 'Foundations of User Experience (UX) Design', 
    issuer: 'Google',
    link: 'https://coursera.org/share/5ee09de5997b5267e3f23146570b4c79' 
  },
  { 
    title: 'Getting Started with Microsoft Excel', 
    issuer: 'Coursera Project Network',
    link: 'https://coursera.org/share/7df0b24b4a511b57a82cfd6e80bb019e' 
  },
  { 
    title: 'Developing Designs for User Experience', 
    issuer: 'Tesda',
    link: 'https://e-tesda.gov.ph/mod/customcert/view.php?id=63484&downloadown=1' 
  },
  { 
    title: 'Start the UX Design Process: Empathize, Define, and Ideate', 
    issuer: 'Coursera',
    link: 'https://coursera.org/share/f056ba686e0a4ae00245595f47ef6e94' 
  },
  { 
    title: 'Introduction to Front-End Development', 
    issuer: 'Meta',
    link: 'https://coursera.org/share/9c664ac7dea78812e3bb89e2051deadc' 
  },
  { 
    title: 'Introduction to CSS', 
    issuer: 'Tesda',
    link: 'https://e-tesda.gov.ph/mod/customcert/view.php?id=41351&downloadown=1' 
  },
  { 
    title: 'Figma for User Interface and User Experience UIUX Design', 
    issuer: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-c44787f4-5f3c-4a16-835f-f19ef0931757/' 
  },
  { 
    title: 'C# Mastering Course For Professionals', 
    issuer: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-3f251af6-7ff5-46c7-b24b-3e2723c31257/' 
  },
  { 
    title: 'Canva for Graphics Design and Video Editing Masterclass', 
    issuer: 'Udemy',
    link: 'https://www.udemy.com/certificate/UC-fe9895ce-b72d-48c8-b101-f533aefaf4d4/' 
  },
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
          <span className="text-primary font-body text-sm tracking-widest uppercase block mb-3">
            Credentials
          </span>
          <h2 className="heading-display text-4xl md:text-5xl lg:text-6xl text-foreground">
            Certificates
          </h2>
        </motion.div>

        <div className="space-y-0">
          {certificates.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex items-start gap-4 md:gap-6 py-6 border-b border-border hover:border-primary/40 transition-colors duration-300"
            >
              <div className="flex-shrink-0 mt-1">
                <Award className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4">
                <h3 className="font-body font-500 text-foreground text-base md:text-lg group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>
                <span className="font-body text-sm text-muted-foreground flex-shrink-0">
                  {cert.issuer}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;