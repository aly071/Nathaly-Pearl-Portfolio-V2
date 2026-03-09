import { motion } from 'framer-motion';

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    tools: string[];
    gallery: string[];
    liveUrl?: string | null;
  };
  activeImageIndex: number;
  setActiveImageIndex: React.Dispatch<React.SetStateAction<number>>;
  onClose: () => void;
}

const ProjectModal = ({ project, activeImageIndex, setActiveImageIndex, onClose }: ProjectModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-background max-w-5xl w-full rounded-2xl p-8 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        >
          ✕
        </button>

        <div className="relative mb-6 bg-muted rounded-xl flex items-center justify-center">
          <motion.img
            key={activeImageIndex}
            src={project.gallery[activeImageIndex]}
            alt={project.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-auto max-h-[500px] object-contain rounded-xl"
          />
          {project.gallery.length > 1 && (
            <>
              <button
                onClick={() =>
                  setActiveImageIndex((prev) =>
                    prev === 0 ? project.gallery.length - 1 : prev - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
              >
                ‹
              </button>
              <button
                onClick={() =>
                  setActiveImageIndex((prev) =>
                    prev === project.gallery.length - 1 ? 0 : prev + 1
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full"
              >
                ›
              </button>
            </>
          )}
        </div>

          {project.gallery.length > 1 && (
            <div className="flex gap-3 mb-6 overflow-x-auto">
              {project.gallery.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`View image ${index + 1}`}
                  title={`View image ${index + 1}`}
                  className={`rounded-lg overflow-hidden border-2 flex-shrink-0 bg-muted ${
                    activeImageIndex === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Project thumbnail ${index + 1}`}
                    className="w-20 h-20 object-contain"
                  />
                </button>
              ))}
            </div>
          )}

        <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>
        <p className="text-muted-foreground mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tools.map((tool) => (
            <span key={tool} className="text-xs px-3 py-1 border border-border rounded-full">
              {tool}
            </span>
          ))}
        </div>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Visit Live Site →
          </a>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
