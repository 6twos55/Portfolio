"use client";

import React, { createContext, useContext } from 'react'
import { IconGlobe, IconFolder, IconDatabase, IconCloud } from '@vtex/phosphor-icons';

// Import images from public/ directory since we are using Next.js App Router
// In Next.js, public assets are accessed from the root "/"
const ProjectsData = [
  {
    prImg: "/bambi-art.png",
    prName: "Bambi's Designs",
    prSiteLink: "https://bambi-design.vercel.app/",
    prDes: "A cloth and resin web application, bringing people from diverse forms of art to a single house!",
    gitLink: "https://github.com/6twos55/Bambi-Design"
  },
  {
    prImg: "/blog-base.png",
    prName: "BlogBase",
    prSiteLink: "https://blogbase-app.vercel.app/",
    prDes: "BlogBase is a CRUD blog posting application created using MERN. Home to all your casual day-to-day posts.",
    gitLink: "https://github.com/6twos55/BlogBase"
  },
  {
    prImg: "/thrift-fashion.png",
    prName: "Thrift Fashion Store",
    prSiteLink: "https://thrift-fashion-secondhand.netlify.app/",
    prDes: "Thrift Fashion is an online shopping platform developed using JavaScript. It was created by Team Achievers during the Techwiz Competition 2022, where I was the team leader.",
    gitLink: "https://github.com/6twos55/Thrift-fashion"
  },
  {
    prImg: "/space-shooter.png",
    prName: "Space Shooter",
    prSiteLink: "https://spacerocks-shooter.netlify.app/",
    prDes: "Space Shooter is a JavaScript-based shooting game where players shoot falling rocks and earn points. This game is optimized for desktop views only.",
    gitLink: "https://github.com/6twos55/Space-shooter"
  }
];

const SkillsContext = createContext();

export const useSkills = () => {
  return useContext(SkillsContext);
};

export const SkillsContextProvider = ({children}) => {
  const size = 30;

  const codeSnippets = {
    h1Open: "<h1>",
    h1Close:"</h1>",
    pOpen: "<p>",
    pClose: "</p>"
  };

  const skills = [
    {
      skillIconOne : (<IconGlobe size={size} />),
      skillIconTwo : (<IconFolder size={size}/>),
      skillText: "Frontend Web Development"
    },
    {
      skillIconOne : (<IconCloud size={size} />),
      skillIconTwo : (<IconDatabase size={size}/>),
      skillText: "Backend Development"
    }
  ];
    
  const technologies = [
    "React.js", "Next.js", "React Native", "TypeScript", 
    "Node.js", "Express", "TailwindCSS", "Tanstack Query", "Zustand (L)",
    "Git", "Jest / RTL (L)", "MongoDB", "Cloudinary",
  ];

  return (
    <SkillsContext.Provider value={{codeSnippets, skills, technologies, Projects: ProjectsData}}>
      {children}
    </SkillsContext.Provider>
  )
}
