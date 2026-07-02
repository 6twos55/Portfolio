"use client";

import { useSkills } from "../Hooks/SkillsContextProvider";
import Skills from "../Components/Skills";
import { IconArrowSquareOut, IconGithubLogo } from "@vtex/phosphor-icons";
import Link from "next/link";

const LandingPage = () => {
  const { codeSnippets, Projects } = useSkills();

  const Education = [
    {
      major: "Advanced Diploma In Software Engineering",
      date: "September 2021 - September 2023.",
      institute: "Aptech Computer Education",
      location: "Abeokuta, Nigeria.",
      comment:
        "The experience gathered at Aptech was what laid the foundation of my software development career. I learnt a vast majority of programming languages in the duration of my course, which gave me insights on how to structure my learning focus.",
    },
    {
      major: "Secondary School Education",
      date: "September 2013 - September 2019.",
      institute: "Saint Augustine's Seminary",
      location: "Ebonyi, Nigeria.",
      comment:
        "My secondary school experience helped me to understand a variety of subjects ranging from environmental, social and economical studies to the learning of scientific studies. It also built in me a certain amount of independence.",
    },
  ];

  const Awards = [
    {
      position: `Third Runner Up Techwiz Global Competition`,
      date: "October 2022.",
      team: "Team leader; Team Achievers.",
    },
  ];

  const getAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    if (
      today.getMonth() < birth.getMonth() ||
      (today.getMonth() === birth.getMonth() &&
        today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  };

  const sixtusAge = getAge("2003-02-11");

  return (
    <div className="w-full flex flex-col items-center" id="Home">
      <div className="w-[75%] max-[1024px]:w-[90%] max-[1024px]:gap-[70px] max-[530px]:gap-[50px] h-fit flex flex-col gap-[90px] justify-center">
        {/* Header Section */}
        <header className="h-[800px] max-[530px]:h-fit max-[530px]:gap-[70px] flex flex-col justify-around">
          <div className="h-fit max-[1024px]:h-auto flex flex-col justify-between">
            <span className="font-['Gochi_Hand','Courier_New',Courier,monospace] font-extrabold text-[16px] leading-[25px] text-[var(--color-secondary-purple)]">
              {codeSnippets.h1Open}
            </span>
            <h1 className="font-['IBM_Plex_Mono',system-ui,sans-serif] font-extrabold text-[51px] max-[1024px]:py-[20px] max-[1024px]:text-[32px] max-[1024px]:leading-[39px] max-[530px]:text-[28px] leading-[73px] text-[var(--text-color)] pl-[25px] max-[530px]:pl-0">
              {sixtusAge} y/o Software Engineer creating intuitive and
              user-friendly experiences.
            </h1>
            <span className="font-['Gochi_Hand','Courier_New',Courier,monospace] font-extrabold text-[16px] leading-[25px] text-[var(--color-secondary-purple)]">
              {codeSnippets.h1Close}
            </span>
          </div>

          <div className="h-fit flex flex-col justify-around" id="About">
            <span className="font-['Gochi_Hand','Courier_New',Courier,monospace] font-extrabold text-[16px] leading-[25px] text-[var(--color-secondary-purple)]">
              {codeSnippets.pOpen}
            </span>
            <h3 className="font-['IBM_Plex_Mono',system-ui,sans-serif] font-normal text-[16px] max-[530px]:text-[15px] leading-[32px] text-[var(--text-color)] pl-[25px] max-[530px]:pl-[10px]">
              Hello, I'm{" "}
              <span className="text-[#0000ff] font-semibold text-[18px]">
                Sixtus Nwaogu
              </span>
              .<br />
              I'm a dedicated web developer passionate about creating
              user-friendly and accessible software. <br />
              Over time, I've sharpened my problem-solving skills by building a
              variety of real-world applications. <br />
              I specialize in full-stack (front-end focused) web development,
              with a strong emphasis on simplicity, reusability, and
              maintainability.
              <br />
              I'm also experienced with writing tests using tools like Jest and
              React Testing Library to ensure reliability and smooth user
              experiences.
            </h3>
            <span className="font-['Gochi_Hand','Courier_New',Courier,monospace] font-extrabold text-[16px] leading-[25px] text-[var(--color-secondary-purple)]">
              {codeSnippets.pClose}
            </span>
          </div>
        </header>

        {/* Education Section */}
        <section
          className="h-auto flex flex-col gap-[100px] max-[530px]:gap-[60px]"
          id="Education"
        >
          <div className="h-[65%] flex flex-col gap-[20px] max-[530px]:gap-0">
            <h2
              data-aos-duration="800"
              data-aos="fade-right"
              className="font-['IBM_Plex_Mono',system-ui,sans-serif] font-extrabold text-[21px] leading-[73px] text-[var(--text-color)]"
            >
              Education
            </h2>

            <div className="flex justify-center items-center">
              <div className="w-full h-auto flex flex-col gap-[30px]">
                {Education.map((education, index) => (
                  <div
                    data-aos-duration="800"
                    data-aos="fade-left"
                    className="w-full h-auto rounded-[15px] border-solid border-[length:var(--border-width)] border-[color:var(--color-secondary-purple)] py-[30px] flex flex-col gap-[6px] transition-all duration-[1.5s] ease-[cubic-bezier(0.075,0.82,0.165,1)]"
                    key={index}
                  >
                    <div className="w-[93%] mx-auto flex flex-col gap-[8px] max-[1024px]:gap-[12px]">
                      <span className="flex justify-between max-[1024px]:flex-col max-[1024px]:items-start max-[530px]:gap-[1px]">
                        <h3 className="w-auto font-['IBM_Plex_Mono',system-ui,sans-serif] font-extrabold text-[26px] max-[1024px]:text-[21px] max-[530px]:text-[19px] leading-[32px] max-[530px]:leading-[28px] text-[var(--text-color)] pl-0">
                          {education.major}
                        </h3>
                        <span className="w-auto font-['IBM_Plex_Mono',system-ui,sans-serif] font-extrabold text-[12px] max-[530px]:text-[11px] leading-[25px] text-[var(--description-color)]">
                          {education.date}
                        </span>
                      </span>
                      <span className="pb-[10px]">
                        <h5 className="font-['IBM_Plex_Mono',system-ui,sans-serif] font-extrabold text-[16px] max-[530px]:text-[14px] leading-[30px] text-[var(--color-secondary-purple)] mb-[3px]">
                          {education.institute}
                        </h5>
                        <p className="font-['IBM_Plex_Mono',system-ui,sans-serif] font-medium text-[15px] max-[530px]:text-[13px] leading-[20px] text-[var(--color-secondary-purple)]">
                          {education.location}
                        </p>
                      </span>
                      <span className="font-['IBM_Plex_Mono',system-ui,sans-serif] font-normal text-[16px] max-[1024px]:text-[14px] max-[530px]:text-[13px] leading-[25px] text-[var(--text-color)] pl-0">
                        {education.comment}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-auto flex flex-col gap-[20px] max-[530px]:gap-0">
            <h3
              data-aos-duration="800"
              data-aos="fade-right"
              className="font-['IBM_Plex_Mono',system-ui,sans-serif] font-extrabold text-[21px] leading-[73px] text-[var(--text-color)]"
            >
              Awards
            </h3>
            <div className="flex flex-col gap-[20px]">
              {Awards.map((award, index) => (
                <Link
                  data-aos-duration="800"
                  data-aos="fade-left"
                  className="no-underline w-full h-[140px] rounded-[15px] border-solid border-[length:var(--border-width)] border-[color:var(--color-secondary-purple)] flex justify-center items-center transition-all duration-[1.5s] ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:border-[length:var(--border-hover-width)] hover:border-[color:var(--border-hover-color)] cursor-pointer"
                  href="/Techwiz3_Award.pdf"
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  <div className="w-[93%]">
                    <span className="flex justify-between max-[1024px]:flex-col max-[1024px]:items-start">
                      <h4 className="w-auto font-['IBM_Plex_Mono',system-ui,sans-serif] font-extrabold text-[26px] max-[1024px]:text-[21px] max-[530px]:text-[19px] leading-[32px] max-[530px]:leading-[28px] text-[var(--text-color)] pl-0">
                        {award.position}
                      </h4>
                      <span className="w-auto font-['IBM_Plex_Mono',system-ui,sans-serif] font-extrabold text-[12px] max-[530px]:text-[11px] leading-[25px] text-[var(--description-color)]">
                        {award.date}
                      </span>
                    </span>
                    <span className="block mt-2">
                      <p className="font-['IBM_Plex_Mono',system-ui,sans-serif] font-extrabold text-[15px] max-[530px]:text-[13px] leading-[30px] text-[var(--color-secondary-purple)]">
                        {award.team}
                      </p>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Skills />

        {/* Projects Section */}
        <section className="flex flex-col gap-[24px] md:gap-[45px] -mx-[12.5%] px-[12.5%] max-[1024px]:-mx-0 max-[1024px]:px-0">
          <div className="flex flex-col gap-[20px]">
            <h3
              data-aos-duration="800"
              data-aos="fade-right"
              className="h-[50px] font-['IBM_Plex_Mono',system-ui,sans-serif] font-extrabold text-[21px] leading-[73px] text-[var(--text-color)] pl-0"
            >
              Featured Projects
            </h3>
            <p
              data-aos-duration="800"
              data-aos="fade-left"
              className="font-['IBM_Plex_Mono',system-ui,sans-serif] font-normal text-[14px] leading-[20px] text-[var(--text-color)] pl-0"
            >
              Here are some of the projects I've worked on personally, or as a
              member of a team.
            </p>
          </div>

          <div
            className="grid grid-cols-2 max-md:grid-cols-1 gap-[22px] md:gap-[26px] lg:gap-[30px] w-full max-[1024px]:mx-0 max-[1024px]:px-0"
          >
            {Projects.map((project, index) => (
              <div
                data-aos-duration="800"
                data-aos="zoom-in-up"
                className="w-full h-full p-[15px] max-[530px]:p-[10px] rounded-[15px] border-solid border-[length:var(--border-width)] border-[color:var(--color-secondary-purple)] flex flex-col transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group"
                key={index}
              >
                <div className="flex flex-col justify-between gap-[10px] max-[530px]:gap-[8px] h-full">
                  <div className="w-full aspect-video overflow-hidden rounded-md">
                    <img
                      className="z-0 w-full h-full object-cover object-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
                      src={project.prImg}
                      alt={project.prName}
                    />
                  </div>
                  <span className="w-full flex items-center gap-[7px]">
                    <Link
                      href={project.prSiteLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center w-auto font-['IBM_Plex_Mono',system-ui,sans-serif] font-normal text-[18px] leading-[18px] text-[var(--color-secondary-purple)] no-underline transition-all duration-500"
                    >
                      <p className="w-auto font-['IBM_Plex_Mono',system-ui,sans-serif] font-normal text-[16px] leading-[32px] text-[var(--color-secondary-purple)] pl-0 m-0">
                        {project.prName}&nbsp;
                      </p>
                      <IconArrowSquareOut className="w-[18px] h-[18px] text-[var(--color-secondary-purple)]" />
                    </Link>
                  </span>
                  <div className="flex flex-col">
                    <small className="font-['IBM_Plex_Mono',system-ui,sans-serif] font-normal text-[11px] leading-[32px] text-[var(--description-color)] pl-0">
                      Description :
                    </small>
                    <p className="font-['IBM_Plex_Mono',system-ui,sans-serif] font-normal text-[16px] max-[530px]:text-[13px] leading-[28px] text-[var(--text-color)] pl-0 mb-[5px]">
                      {project.prDes}
                    </p>
                  </div>
                  <span className="flex items-center gap-[5px] pb-[5px] max-[1024px]:pb-0 max-[768px]:pb-0">
                    <Link
                      href={project.gitLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-[30px] font-['IBM_Plex_Mono',system-ui,sans-serif] font-normal text-[12px] leading-[18px] text-[var(--text-color)] no-underline transition-all duration-500 hover:text-[var(--text-color)] cursor-pointer"
                    >
                      <IconGithubLogo size={30} />
                    </Link>
                    <Link
                      href={project.gitLink}
                      className="w-auto font-['IBM_Plex_Mono',system-ui,sans-serif] font-normal text-[12px] leading-[18px] text-[var(--text-color)] no-underline transition-all duration-500 hover:text-[var(--text-color)] cursor-pointer"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View On Github
                    </Link>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
