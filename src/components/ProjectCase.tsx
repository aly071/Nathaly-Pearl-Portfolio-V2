import { motion } from 'framer-motion';

export default function ProjectCase({ project, onImageClick }: any) {
  const isRight = project.layout === 'right';
  const isCenter = project.layout === 'center';
  const hasMainImage = !!project.mainImage;
  const isApp = project.projectType === 'app';
  const isWebsite = project.projectType === 'website';

  return (
    <section
      className="
        relative
        py-28
        border-b border-white/10
        bg-gradient-to-b
        from-transparent
        via-white/5
        to-transparent
        overflow-hidden
      "
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-purple-500/10 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {isApp && hasMainImage ? (
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {project.title}
              </h2>

              <p className="text-gray-400 leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {project.tools.map((tool: string) => (
                  <span
                    key={tool}
                    className="px-4 py-1 text-sm bg-white/10 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
                {project.gallery
                  .filter((img: string) => img !== project.mainImage)
                  .map((img: string, i: number) => (
                    <motion.img
                      key={i}
                      src={img}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => onImageClick(i + 1)}
                      className="w-[110px] h-[110px] object-contain cursor-pointer"
                      alt=""
                    />
                  ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <img
                src={project.mainImage}
                className="max-h-[560px] object-contain"
                alt=""
              />
            </motion.div>
          </div>
        ) : isWebsite && hasMainImage ? (
          <div className="grid gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <img
                src={project.mainImage}
                className="w-full max-w-[900px] object-contain rounded-xl"
                alt=""
              />
            </motion.div>

            <div className="flex gap-4 flex-wrap justify-center mb-10">
              {project.gallery
                .filter((img: string) => img !== project.mainImage)
                .map((img: string, i: number) => (
                  <motion.img
                    key={i}
                    src={img}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => onImageClick(i + 1)}
                    className="w-[120px] h-[120px] object-contain cursor-pointer"
                    alt=""
                  />
                ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {project.title}
              </h2>

              <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl mx-auto">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 justify-center mb-6">
                {project.tools.map((tool: string) => (
                  <span
                    key={tool}
                    className="px-4 py-1 text-sm bg-white/10 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 underline underline-offset-4 hover:opacity-70 transition"
                >
                  Live Preview →
                </a>
              )}
            </motion.div>
          </div>
        ) : (
          <div
            className={`grid gap-16 items-center ${
              isCenter ? 'text-center max-w-5xl mx-auto' : 'md:grid-cols-2'
            }`}
          >
            {!isRight && !isCenter && (
              <Gallery project={project} onImageClick={onImageClick} />
            )}

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {project.title}
              </h2>

              <p className="text-gray-400 leading-relaxed mb-8">
                {project.description}
              </p>

              <div
                className={`flex flex-wrap gap-3 ${
                  isCenter
                    ? 'justify-center'
                    : 'justify-center md:justify-start'
                }`}
              >
                {project.tools.map((tool: string) => (
                  <span
                    key={tool}
                    className="px-4 py-1 text-sm bg-white/10 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-8 underline underline-offset-4 hover:opacity-70 transition"
                >
                  Live Preview →
                </a>
              )}
            </motion.div>

            {isRight && <Gallery project={project} onImageClick={onImageClick} />}

            {isCenter && (
              <div className="mt-14">
                <Gallery project={project} onImageClick={onImageClick} />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function Gallery({ project, onImageClick }: any) {
  const sizeClass =
    project.imageSize === 'xlarge'
      ? 'max-h-[520px]'
      : project.imageSize === 'large'
      ? 'max-h-[420px]'
      : project.imageSize === 'medium'
      ? 'max-h-[320px]'
      : 'max-h-[240px]';

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
      {project.gallery.map((img: string, i: number) => (
        <motion.div
          key={i}
          className="mb-6 break-inside-avoid cursor-pointer group flex justify-center"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 220 }}
          onClick={() => onImageClick(i)}
        >
          <img
            src={img}
            alt=""
            className={`w-auto ${sizeClass} object-contain transition duration-300 group-hover:scale-[1.03]`}
          />
        </motion.div>
      ))}
    </div>
  );
}