import { useState, useEffect } from "react";

export default function ImageLightbox({ images, index, onClose }: any) {

  const [current, setCurrent] = useState(index || 0);

  useEffect(() => {
    setCurrent(index || 0);
  }, [index]);

  if (index === null) return null;

  const next = () =>
    setCurrent((current + 1) % images.length);

  const prev = () =>
    setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-6 right-8 text-white text-3xl"
      >
        ✕
      </button>

      {/* Previous */}
      <button
        onClick={prev}
        className="absolute left-10 text-white text-5xl"
      >
        ‹
      </button>

      {/* Image */}
      <img
        src={images[current]}
        className="max-h-[85vh] max-w-[90vw] object-contain"
      />

      {/* Next */}
      <button
        onClick={next}
        className="absolute right-10 text-white text-5xl"
      >
        ›
      </button>

    </div>
  );
}