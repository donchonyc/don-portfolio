"use client";
import WorkModal from "./WorkModal";
import Link from "next/link";
import { useState } from "react";

const WorkSection = () => {
  // Update the types array to include unique ids and labels.
  const types = [
    { id: "work", label: "Work" },
    { id: "playground", label: "Playground" },
  ];

  const works = [
    {
      id: 1,
      title: "Breathe",
      tags: ["Figma", "SwiftUI"],
      description: "Easy-to-use mindfulness mobile app",
      fullDescription:
        "I don’t always wear an Apple Watch, and many people don’t own one, but I always have my iPhone with me. That’s why I propose creating a mindfulness app with quick breathing exercises, mindful check-ins, and reflective prompts—letting iPhone users experience mindfulness at anytime without having an Apple Watch.",
      image: "/next.svg",
      techStack: ["figma", "react", "nextjs", "tailwindcss"],
      href: "/work/breathe",
    },
    {
      id: 2,
      title: "Helping Figma’s New UI",
      tags: ["Figma"],
      description: "",
      fullDescription:
        "I referred to Figma’s help doc when transitioning to UI3 and felt the visual layouts were inconvenient for me to look at from my phone. Its current structure lacks mobile-friendly layouts to clearly differentiate between old and redesigned features. That’s why I redesigned the layout for a mobile setup.",
      image: "/next.svg",
      techStack: ["figma"],
      href: "/playground/helpingFigma",
    },
    {
      id: 3,
      title: "Untitled",
      tags: ["Figma", "React"],
      description: "This is a description of work 1.",
      fullDescription: "loreum ipsum",
      image: "/next.svg",
      techStack: ["figma", "react", "nextjs", "tailwindcss"],
      href: "/work/untitled",
    },
    {
      id: 4,
      title: "Save Us From Ourselves",
      tags: ["TouchDesigner", "Arduino"],
      description: "This is a description of work 1.",
      fullDescription: "loreum ipsum",
      image: "/next.svg",
      techStack: ["figma", "react", "nextjs", "tailwindcss"],
      href: "/playground/saveUs",
    },
  ];

  const [selectedWork, setSelectedWork] = useState(null);

  // Trigger modal for a specific work item
  const handleWorkClick = (id) => {
    setSelectedWork(id);
  };

  // Trigger modal for the first work that matches the clicked type
  const handleTypeClick = (typeId) => {
    // Filter the work items based on whether their href starts with the type string.
    const filteredWorks = works.filter((work) =>
      work.href.startsWith(`/${typeId}`)
    );
    if (filteredWorks.length > 0) {
      setSelectedWork(filteredWorks[0].id);
    }
  };

  const handleCloseModal = () => {
    setSelectedWork(null);
  };

  const handleNextWork = () => {
    const currentIndex = works.findIndex((work) => work.id === selectedWork);
    if (currentIndex === -1) return;
    // (Using +2 here to skip to the next work of the same type might be intentional.)
    const nextIndex = (currentIndex + 2) % works.length;
    setSelectedWork(works[nextIndex].id);
  };

  const handlePrevWork = () => {
    const currentIndex = works.findIndex((work) => work.id === selectedWork);
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 2 + works.length) % works.length;
    setSelectedWork(works[prevIndex].id);
  };

  return (
    <section id="work" className="px-4 py-96 sm:px-6 lg:px-8">
      {/* Render type buttons with unique ids and onClick handlers */}
      <h2 className="text-3xl font-bold mb-12 grid grid-cols-2 gap-1">
        {types.map((type) => (
          <button
            key={type.id}
            id={`type-${type.id}`}
            className="hover:text-cloud transition-colors text-left"
            onClick={() => handleTypeClick(type.id)}
          >
            {type.label}
          </button>
        ))}
      </h2>

      <div className="grid grid-cols-2 gap-1">
        {works.map((work, index) => (
          <Link
            href={work.href}
            key={index}
            className="backdrop-blur-sm rounded-lg p-3 hover:text-cloud transition-colors text-left"
          >
            <h3 className="text-2xl font-medium mb-2">{work.title}</h3>
            <div className="flex flex-wrap gap-1">
              {work.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-0.5 text-xs rounded-full text-cloud/30 border border-cloud/30 mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {/* Conditionally render the WorkModal */}
      {selectedWork && (
        <WorkModal
          work={works.find((work) => work.id === selectedWork)}
          onClose={handleCloseModal}
          onNext={handleNextWork}
          onPrev={handlePrevWork}
        />
      )}
    </section>
  );
};

export default WorkSection;
