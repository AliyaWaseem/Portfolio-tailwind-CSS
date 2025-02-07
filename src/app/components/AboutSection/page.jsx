"use client"
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "../TabButton/page";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Typescript</li>
                <li>React</li>
                <li>Nextjs</li>
                <li>Bootstrap</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>SMIT</li>
                <li>GIAIC</li>
                <li>AIOU Islamabad.</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Web and Mobile App Development</li>
                <li>Gen-AI and Meta</li>
                <li>Master in Education</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl-px-16">
        <Image
          src="/assets/about-pic.png"
          alt="about-pic"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex h-full flex-col">
          <h2 className="text-4xl font-bold text-white mb-4 text-left">About Me</h2>
          <p className="text-base lg:text-lg text-left">
            I am a passionate Full Stack Web Developer with expertise in
            building dynamic and responsive websites and applications. My skill
            set includes a strong foundation in front-end technologies such as
            HTML, CSS, JavaScript, and Bootstrap for designing sleek and
            user-friendly interfaces. I leverage React and Next.js to create
            high-performance, scalable web apps that offer seamless user
            experiences. On the back end, I use TypeScript to ensure robust,
            type-safe code that enhances functionality and reliability. I am
            dedicated to continuous learning and thrive on building innovative
            solutions for web development challenges.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
             selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                {" "} 
                Skills{" "}
                </TabButton>
                <TabButton
                 selectTab={() => handleTabChange("education")} active={tab === "education"}>
                {" "} 
                Education{" "}
                </TabButton>
                <TabButton
                 selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                {" "} 
                Certifications{" "}
                </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
