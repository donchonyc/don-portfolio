import Image from "next/image";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";

export default function WorkModal({ work, onClose, onNext, onPrev }) {
  const modalRef = useRef();

  const handleOutsideClick = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-mist bg-opacity-75 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
      ref={modalRef}
    >
      <div
        ref={modalRef}
        className="bg-fog rounded-lg max-w-4xl w-full max-h-[90dvh] overflow-y-auto p-8 h-10/12 border border-cloud"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between mb-3">
          <h2 className="text-2xl font-bold text-black translate-x-8">
            {work.title}
          </h2>
          <button
            onClick={onClose}
            className="text-cloud hover:text-black rounded-lg p-2 bg-cloud/50 hover:bg-cloud/70 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-6 translate-x-8">
          <div>
            <p className="text-">{work.description}</p>
            <p>{work.fullDescription}</p>
            <div>
              <h3 className="font-semibold mb-2 text-cloud/60">TechStack:</h3>
              <ul className="list-disc list-inside">
                {work.techStack.map((tech, index) => (
                  <li key={index} className="text-cloud/40">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative h-96 w-full md:w-1/2">
            <Image
              src={work.image}
              alt={work.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full max-w-4xl">
            <button
              onClick={onPrev}
              className="text-cloud hover:text-black rounded-lg p-2 bg-cloud/50 hover:bg-cloud/70 transition-colors -translate-x-[120%]"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={onNext}
              className="text-cloud hover:text-black rounded-lg p-2 bg-cloud/50 hover:bg-cloud/70 transition-colors -translate-x-[80%]"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
