"use client";

import React, { useState } from "react";
import ProjectCard from "@/app/components/ProjectCards/page";
import ProjectTag from "../ProjectTag/page";

const projectCardsData = [
  {
    id: 1,
    title: "My Portfolio",
    description: "React, Nextjs, and Tailwind CSS",
    image: "/assets/portfolio-card.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AliyaWaseem/Portfolio-1st-Assignment-Q2.git",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "BootStrap Website Project",
    description: "BootStrap, HTML, and CSS",
    image: "/assets/bmp.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AliyaWaseem/Group-Project-BMP-Website.git",
    previewUrl: "https://group-project-bmp-website.vercel.app/"
  },
  {
    id: 3,
    title: "Netflix Clone",
    description: "Bootstrap, CSS3",
    image: "/assets/netflix.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AliyaWaseem/Netflix",
    previewUrl: "https://netflix-dun-three-18.vercel.app/"
  },
  {
    id: 4,
    title: "Resume Builder",
    description: "HTML, CSS3, JavaScript, Typescript",
    image: "/assets/resumebuilder.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AliyaWaseem/Milestone-4-Editable-Resume-Builder",
    previewUrl: "https://milestone-4-editable-resume-builder-iota.vercel.app/"
  },
  {
    id: 5,
    title: "Mini Javascript Project",
    description: "HTML, CSS, JavaScript",
    image: "/assets/deb.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AliyaWaseem/Debit-Card.git",
    previewUrl: "https://debit-card-e7nq.vercel.app/"
  },
  {
    id: 6,
    title: "OLX Clone",
    description: "Bootstrap, CSS3, JavaScript",
    image: "/assets/olx-clone.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/AliyaWaseem/olx-clone",
    previewUrl: "https://olx-clone-psi-swart.vercel.app/"
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectCardsData.filter((project) => 
   project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects</h2>
        <div className="text-white flex flex-row items-center justify-center gap-2 py-6">
         <ProjectTag 
         onClick={handleTagChange} 
         name="All" 
         isSelected={tag === "All"}
         />
         <ProjectTag 
         onClick={handleTagChange} 
         name="web" 
         isSelected={tag === "web"}
         />
         <ProjectTag 
         onClick={handleTagChange} 
         name="Mobile" 
         isSelected={tag === "Mobile"}
         />
        </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12 md:px-12 sm:px-0">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
