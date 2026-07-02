"use client";

import { IconEnvelope, IconGithubLogo, IconLinkedinLogo, IconTwitterLogo, IconInstagramLogo } from '@vtex/phosphor-icons';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full h-175 bg-[var(--background-color)] flex justify-center max-[1280px]:h-auto max-[750px]:h-[600px] max-[530px]:h-[550px]">
      <div className="w-[75%] max-[1280px]:w-[80%] max-[1024px]:w-[90%] flex flex-col justify-around bg-[var(--background-color)] text-[var(--text-color)] border-t border-[var(--border-color)]" id='Contact'>
        
        <div data-aos-duration="1000" data-aos="fade-up" className="flex flex-col items-start gap-[20px] pt-10">
          <h2 className="font-['IBM_Plex_Mono',system-ui,sans-serif] font-extrabold text-[51px] leading-[73px] text-[var(--text-color)] max-[1280px]:text-[42px] max-[1024px]:text-[35px] max-[1024px]:leading-[60px] max-[750px]:text-[28px] max-[750px]:leading-[50px] max-[530px]:text-[23px] max-[530px]:leading-[40px]">
            Hey, I'd love to hear from you.
          </h2>
          <p className="font-['IBM_Plex_Mono',system-ui,sans-serif] font-normal text-[16px] leading-[32px] text-[var(--text-color)] max-[530px]:text-[14px] max-[530px]:leading-[25px]">
            Want to get in touch? I'm open for collaborations!
          </p>
          <Link href='mailto:sixtusnwaogu@gmail.com' className="w-auto flex items-center justify-start gap-[10px] border-b-2 border-[var(--color-secondary-purple)] font-['IBM_Plex_Mono',system-ui,sans-serif] font-normal text-[12px] leading-[18px] text-[var(--text-color)] no-underline transition-all duration-500 hover:text-[var(--text-color)] cursor-pointer pb-2">
            <span className="w-[30px] text-[25px]">
              <IconEnvelope />
            </span>
            <p className="w-auto font-['IBM_Plex_Mono',system-ui,sans-serif] font-normal text-[16px]">Send me a mail.</p>
          </Link>
          
          <span className="w-auto flex flex-col items-start gap-[15px] h-[80px] mt-8">
            <small className="text-[var(--description-color)] font-['IBM_Plex_Mono',system-ui,sans-serif]">My handles</small>
            <span className="w-auto flex items-end gap-[10px]">
              <Link href='https://github.com/6twos55' target="_blank" rel='noreferrer' title='Github' className="w-[30px] text-[25px] text-[var(--text-color)] transition-all duration-300 hover:scale-120">
                <IconGithubLogo/>
              </Link>
              <Link target="_blank" href='https://linkedin.com/in/sixtus-nwaogu/' rel='noreferrer' title='LinkedIn' className="w-[30px] text-[25px] text-[var(--text-color)] transition-all duration-300 hover:scale-120">
                <IconLinkedinLogo/>
              </Link>
              <Link target="_blank" href='https://x.com/6two_s55' rel='noreferrer' title='Twitter' className="w-[30px] text-[25px] text-[var(--text-color)] transition-all duration-300 hover:scale-120">
                <IconTwitterLogo />
              </Link>
              <Link href='https://www.instagram.com/6two_s55/' rel='noreferrer' target="_blank" title='Instagram' className="w-[30px] text-[25px] text-[var(--text-color)] transition-all duration-300 hover:scale-120">
                <IconInstagramLogo/>
              </Link>
            </span>
          </span>
        </div>

        <div className="flex justify-between max-[530px]:flex-col max-[530px]:text-center pb-8 mt-10">
          <span className="w-auto flex gap-[7px] max-[530px]:justify-center">
            <small className="text-[11px] text-[var(--description-color)] font-['IBM_Plex_Mono',system-ui,sans-serif] cursor-default">&copy; {new Date().getFullYear()} Sixtus Nwaogu. All Rights Reserved.</small>
          </span>
          <span className="w-auto">
            <small className="text-[11px] text-[var(--description-color)] font-['IBM_Plex_Mono',system-ui,sans-serif] cursor-default">Built with Next.js and Tailwind CSS.</small>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
