import React from 'react'
import "../Styles/LandingPage.scss";
import { useSkills } from '../Hooks/SkillsContextProvider';

const Skills = () => {
const {skills,technologies} = useSkills();
  return (
    <section className="skill-Tech" id='Skills'>
      <section className="skill-Container" > 
        <h3 data-aos-duration="800" data-aos="fade-right">Skills</h3>
        <div className="skills-List-Container">
          {
            skills.map((skill,index) => (
              (
              <div data-aos-duration="800" data-aos="fade-up" className="skill" key={index} >
                <div className="skills">
                  <span className="skill-Icon-Container">
                  <span>
                    {skill.skillIconOne}
                  </span>
                  <span>
                    {skill.skillIconTwo}
                  </span>
                </span>
                <p className='skill-Text'>{skill.skillText}</p>
                </div>
              </div>
              )
            ))
          }
        </div>
      </section>
      <section className="technologies-Container">
        <h3 data-aos-duration="800" data-aos="fade-right">Technologies</h3>
        <p data-aos-duration="800" data-aos="fade-left">Here are some of the technologies I've learnt and worked with.</p>
        <div className="tech-List-Container">
          {
            technologies.map((technology,index) => (
              <span data-aos-duration="800" data-aos="fade-up" className="technology" key={index}>
                <p>{technology}</p>
              </span>
            ))
          }
        </div>
      </section>
    </section>
  )
}

export default Skills