"use client";

import { useSkills } from "../Hooks/SkillsContextProvider";

const Skills = () => {
  const { skills, technologies } = useSkills();

  return (
    <section
      className="flex flex-col items-start gap-[80px] max-[1024px]:gap-[50px] max-[1024px]:h-auto w-full"
      id="Skills"
    >
      <section className="flex flex-col gap-[25px] max-[1024px]:h-auto max-[1024px]:gap-[10px] max-[530px]:gap-0 w-full">
        <h3
          data-aos-duration="800"
          data-aos="fade-right"
          className="font-['IBM_Plex_Mono',system-ui,sans-serif] font-extrabold text-[21px] leading-[73px] text-[var(--text-color)]"
        >
          Skills
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 w-full">
          {skills.map((skill, index) => (
            <div
              data-aos-duration="800"
              data-aos="fade-up"
              className="w-full h-[210px] max-[1024px]:h-[180px] rounded-[15px] border-solid border-[length:var(--border-width)] border-[color:var(--color-secondary-purple)] flex flex-col items-center justify-center transition-all duration-[1.5s] ease-[cubic-bezier(0.075,0.82,0.165,1)]"
              key={index}
            >
              <div className="w-[80%] max-[1024px]:w-[90%] flex flex-col items-center justify-center gap-[10px]">
                <span className="flex items-center justify-center">
                  <span className="w-[35px] text-[25px] flex items-center justify-center [&>svg]:w-[25px] [&>svg]:h-[25px]">
                    {skill.skillIconOne}
                  </span>
                  <span className="w-[35px] text-[25px] flex items-center justify-center [&>svg]:w-[25px] [&>svg]:h-[25px]">
                    {skill.skillIconTwo}
                  </span>
                </span>
                <p className="font-['IBM_Plex_Mono',system-ui,sans-serif] font-normal text-[16px] max-[1024px]:text-[14px] leading-[32px] max-[1024px]:leading-[21px] text-[var(--text-color)] pl-0 text-center">
                  {skill.skillText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-[20px] max-[1024px]:h-auto max-[530px]:gap-[3px] w-full">
        <h3
          data-aos-duration="800"
          data-aos="fade-right"
          className="h-[50px] font-['IBM_Plex_Mono',system-ui,sans-serif] font-extrabold text-[21px] leading-[73px] text-[var(--text-color)] pl-0"
        >
          Technologies
        </h3>
        <p
          data-aos-duration="800"
          data-aos="fade-left"
          className="font-['IBM_Plex_Mono',system-ui,sans-serif] font-normal text-[14px] leading-[20px] text-[var(--text-color)] pl-0 mb-[20px]"
        >
          Here are some of the technologies I've learnt and worked with. (L)
          means currently learning.
        </p>

        <div className="grid grid-cols-5 max-[1024px]:grid-cols-4 max-[768px]:grid-cols-3 max-[530px]:grid-cols-2 gap-[12px] w-full">
          {technologies.map((technology, index) => (
            <span
              data-aos-duration="800"
              data-aos="fade-up"
              className="w-[98%] h-[80px] flex items-center justify-center rounded-[15px] border-solid border-[length:var(--border-width)] border-[color:var(--color-secondary-purple)] transition-all duration-[1.5s] ease-[cubic-bezier(0.075,0.82,0.165,1)]"
              key={index}
            >
              <p className="flex items-center justify-center font-['IBM_Plex_Mono',system-ui,sans-serif] font-normal text-[14px] leading-[32px] text-[var(--text-color)] pl-0 text-center">
                {technology}
              </p>
            </span>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Skills;
