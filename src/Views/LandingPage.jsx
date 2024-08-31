import React from 'react'
import "../Styles/LandingPage.scss";
import { useSkills } from '../Hooks/SkillsContextProvider';
import Skills from '../Components/Skills';
import { IconArrowSquareOut, IconGithubLogo } from '@vtex/phosphor-icons';
import techwiz3Award from "../Assets/Techwiz3_Award.pdf";

const LandingPage = () => {
const { codeSnippets, Projects } =  useSkills();
 
const Education = [
  {
    major: "Advanced Diploma In Software Engineering",
    date : "September 2021 - September 2023.",
    institute:"Aptech Computer Education",
    location :"Abeokuta, Nigeria.",
    comment : "The experience gathered at Aptech was what laid the foundation of my software development career. I learnt a vast majority of programming languages in the duration of my course, which gave me insights on how to structure my learning focus."
  },
  {
    major: "Secondary School Education",
    date: "September 2013 - September 2019",
    institute: "Saint Augustine's Seminary",
    location: "Ebonyi, Nigeria.",
    comment: "My secondary school experience helped me to understand a variety of subjects ranging from environmental, social and economical studies to the learning of scientific studies. It also built in me a certain amount of independence."
  }
  
]

const Awards = [
  {
    position: `Third Runner Up Techwiz Global Competition`,
    date:"October 2022.",
    team:"Team leader; Team Achievers."
  },
 
]

const sixtusAge = new Date().getFullYear() - 2003

  return (
    <div className='landingpage-Container' id='Home'>
      <div className="inner-Landingpage-Container">
        <header className="header-Header-Container">
          <div className="header-Title" >
            <span> {codeSnippets.h1Open} </span>
            <h1>
              {sixtusAge} y/o freelancing Software Engineer creating intuitive and user-friendly experiences.
            </h1>
            <span>{codeSnippets.h1Close}</span> 
          </div>
          <div className="header-Body" id='About'>
            <span> {codeSnippets.pOpen} </span>
            <h3>
              Hello, I'm <span style={{ color: "#0000ff" }}>Sixtus Nwaogu</span>.<br />
              I'm a dedicated software developer with a passion for creating user-friendly software solutions. <br /> Over time, I've honed my problem-solving skills through the development of various applications. <br /> I specialize in building fullstack web and mobile applications, with a strong focus on usability and simplicity.
            </h3>
            <span>{codeSnippets.pClose}</span> 
          </div>
        </header>

        <section className='education-Container' id='Education'>
          <div className="education">
            <h2 data-aos-duration="800" data-aos="fade-right">Education</h2>

            <div className="education-Institutions">
              <div className="aptech-Container">
                {
                  Education.map((education, index) => (
                    <div data-aos-duration="800" data-aos="fade-left" className="aptech" key={index}>
                      <div className="aptech-Items">
                         <span className="education-Title">
                        <h3>{education.major}</h3>
                        <span>{education.date}</span>
                      </span>
                      <span className="education-Location">
                        <h5 style={{marginBottom: '3px'}}>{education.institute}</h5>
                        <p> {education.location} </p>
                      </span>
                      <span className="education-Body">
                        {education.comment}
                      </span>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

          <div className="awards-Container">
            <h3 data-aos-duration="800" data-aos="fade-right">Awards</h3>
            <div className="awards">
            {
              Awards.map((award, index) => (
                <a data-aos-duration="800" data-aos="fade-left" className='techWizContainer' href={techwiz3Award} target='_blank' rel='noreferrer' key={index}>
                  <div className="inner-Awards" >
                    <div className="award-Item">
                      <span className="competition">
                        <h4> {award.position }</h4>
                        <span> {award.date} </span>
                      </span>
                      <span className="competition-Description">
                        <p> {award.team} </p>
                      </span>
                    </div>
                  </div>
                </a>
              ))
            }
            </div>
          </div>
        </section>

        <Skills/>


        <section className="featured-Projects-Container">
          <h3 data-aos-duration="800" data-aos="fade-right">Featured Projects</h3>
          <p data-aos-duration="800" data-aos="fade-left">Here are some of the projects I've worked on personally, or as a member of a team.</p>
          <div className="projects-Container">

              {
                Projects.map((project,index) => (
                  
                  <div data-aos-duration="800" data-aos="zoom-in-up" className="project" key={index}>
                    <div className="inner-Project-Container">
                      <img className='img' src={project.prImg} alt={project.prName} />
                      <span className="project-Name">
                        <a href={project.prSiteLink} target='_blank' rel='noreferrer'>
                          <p>{project.prName}&nbsp;</p>
                          <a href={project.prSiteLink} target="_blank" rel='noreferrer'><IconArrowSquareOut className='redirect'/></a>
                        </a>
                      </span>
                      <div className="description">
                        <small>Description :</small>
                        <p>
                          {project.prDes}
                        </p>
                      </div>
                      <span className="git-View">
                        <a href={project.gitLink} target="_blank" rel='noreferrer'><IconGithubLogo size={30}/></a>
                        <a href = {project.gitLink}className='git' target="_blank" rel='noreferrer'>View On Github</a>
                      </span>
                    </div>
                  </div>
                ))
              }
          </div>
        </section>
      </div>
    </div>
  )
}

export default LandingPage