import React, { createContext,useContext } from 'react'
import { IconGlobe,IconAppleLogo,IconAndroidLogo,IconFolder,IconDatabase, IconCloud, IconFigmaLogo } from '@vtex/phosphor-icons';

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
    }

    const skills = [
        {
        skillIconOne : (<IconGlobe size={size} />),
        skillIconTwo : (<IconFolder size={size}/>),
        skillText: "Frontend Development"
        },
        {
        skillIconOne : (< IconCloud size = {size} />),
        skillIconTwo : (<IconDatabase size = {size}/>),
        skillText: "Backend Development"
        },
        {
        skillIconOne : (<IconAndroidLogo size={size}/>),
        skillIconTwo : (<IconAppleLogo size={size} />),
        skillText: "Mobile App Development"
        },
        
        {
        skillIconOne : (< IconFigmaLogo size= {size}/>),
        skillIconTwo : "",
        skillText: "UI/UX Design"
        }
    ]
    
    const technologies = ["HTML", "Sass", "JavaScript(ES6+)", "React.js", "Node.js", "Express", "MongoDB", "Java", "Kotlin", "TypeScript", "Figma", "Python", "Bootstrap", "C#", "Git", "Material UI", "GraphQL"]

    const Projects = [
      {
        prImg:require("../Assets/bambi-art.png"),
        prName:"Bambi's Designs",
        prSiteLink:"https://bambi-design.vercel.app/",
        prDes:"A cloth and resin web application, bringing people from diverse forms of art to a single house!",
        gitLink:"https://github.com/6twos55/Bambi-Design"
  
      },
      {
        prImg:require("../Assets/blog-base.png"),
        prName:"BlogBase",
        prSiteLink:"https://blogbase-app.vercel.app/",
        prDes:"BlogBase is a CRUD blog posting application created using MERN. Home to all your casual day-to-day posts.",
        gitLink:"https://github.com/6twos55/BlogBase"
  
      },
      {
        prImg:require("../Assets/thrift-fashion.png"),
        prName:"Thrift Fashion Store",
        prSiteLink:"https://thrift-fashion-secondhand.netlify.app/",
        prDes:"Thrift Fashion is an online shopping platform developed using JavaScript. It was created by Team Achievers during the Techwiz Competition 2022, where I was the team leader.",
        gitLink:"https://github.com/6twos55/Thrift-fashion"

      },
      {
        prImg:require("../Assets/space-shooter.png"),
        prName:"Space Shooter",
        prSiteLink:"https://spacerocks-shooter.netlify.app/",
        prDes:"Space Shooter is a JavaScript-based shooting game where players use the arrow keys to shoot falling rocks and earn points. The game is optimized for desktop views.",
        gitLink:"https://github.com/6twos55/Space-shooter"
      },
      {
        prImg:require("../Assets/ip-address.png"),
        prName:"IP Address Tracker",
        prSiteLink:"https://ipaddress-tracker-location.netlify.app/",
        prDes:"IP Address Tracker is an IP address lookup tool developed using HTML, CSS, and JavaScript API. It retrieves the location, timezone, and ISP information for the entered IP address.",
        gitLink:"https://github.com/6twos55/ip-address-tracker"
      },
      {
        prImg:require("../Assets/first-fashion.png"),
        prName:"First Fashion",
        prSiteLink:"https://firstfashion-project.netlify.app/",
        prDes:"First Fashion is a brand showcase website developed using HTML. It was created as a school project aimed at broadening knowledge and enhancing skills.",
        gitLink:"https://github.com/6twos55/First-Fashion"

      },
      {
        prImg:require("../Assets/advice-generator.png"),
        prName:"Advice Generator",
        prSiteLink:"https://advice-generator-dice.netlify.app/",
        prDes:"An Advice Generator built using the JavaScript API, providing random helpful tips with each button click.",
        gitLink:"https://github.com/6twos55/Advice-generator"
      }
    ]

  return (
    <SkillsContext.Provider value={{codeSnippets,skills,technologies,Projects}}>
        {children}
    </SkillsContext.Provider>
  )
}

