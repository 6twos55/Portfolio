"use client";

import { createContext, useContext } from 'react'
import { IconGlobe, IconFolder, IconDatabase, IconCloud } from '@vtex/phosphor-icons';

const ProjectsData = [
  {
    prImg: "/aara-banner.png",
    prName: "Aara Fitness",
    prSiteLink: "https://aara.space/",
    prDes: "Showcase and onboarding website for a Fitness company. Built with Next.js and TailwindCSS.",
    gitLink: "https://github.com/6twos55/aara"
  },
  {
    prImg: "/blog-base.png",
    prName: "BlogBase",
    prSiteLink: "https://blogbase-app.vercel.app/",
    prDes: "Blog posting application created with MERN stack. Add, delete and update your posts.",
    gitLink: "https://github.com/6twos55/BlogBase"
  },
  {
    prImg: "/oguguo-banner.png",
    prName: "OGUGUO",
    prSiteLink: "https://oguguo.vercel.app/",
    prDes: "Portfolio website for a Brand designer & Artist. Built with Next.js and TailwindCSS.",
    gitLink: "https://github.com/6twos55/oguguo_portfolio"
  },
  {
    prImg: "/space-shooter.png",
    prName: "Space Shooter",
    prSiteLink: "https://spacerocks-shooter.netlify.app/",
    prDes: "Space shooter game. Shoot falling rocks and earn points. Desktop views only.",
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
