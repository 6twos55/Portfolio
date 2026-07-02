"use client";

import { useState, useContext } from "react";
import { ThemeContext } from "./Providers";
import {
  IconListDashes,
  IconX,
  IconGithubLogo,
  IconTwitterLogo,
  IconLinkedinLogo,
  IconInstagramLogo,
  IconMoonStars,
  IconSunDim,
} from "@vtex/phosphor-icons";
import Link from "next/link";

const Header = () => {
  const sixtus = "Sixtus";
  const size = 32;
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleThemeChange = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-center w-full bg-[var(--nav-bg)] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[5.6px] border-b border-[var(--border-color)] border-t-[1.5px] border-t-[var(--color-secondary-purple)] h-[70px]">
      
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center justify-around w-[93%] h-full">
        <Link href="#Home" className="text-[24px] leading-[28px] text-[var(--color-secondary-purple)] font-normal font-['Gochi_Hand','Courier_New',Courier,monospace] no-underline">
          {sixtus}
        </Link>

        <span className="flex items-center gap-[50px] w-auto">
          <div className="flex cursor-pointer text-[var(--text-color)]" onClick={handleThemeChange}>
            {theme === "dark" ? <IconSunDim size={30} /> : theme === "light" ? <IconMoonStars size={30} /> : null}
          </div>

          <Link href="#About" className="font-['IBM_Plex_Mono',system-ui,sans-serif] font-normal text-[12px] leading-[18px] text-[var(--text-color)] no-underline transition-all duration-500 hover:text-[var(--text-color)] cursor-pointer">About</Link>
          <Link href="#Education" className="font-['IBM_Plex_Mono',system-ui,sans-serif] font-normal text-[12px] leading-[18px] text-[var(--text-color)] no-underline transition-all duration-500 hover:text-[var(--text-color)] cursor-pointer">Education</Link>
          <Link href="#Skills" className="font-['IBM_Plex_Mono',system-ui,sans-serif] font-normal text-[12px] leading-[18px] text-[var(--text-color)] no-underline transition-all duration-500 hover:text-[var(--text-color)] cursor-pointer">Skills</Link>
          <Link href="#Contact" className="font-['IBM_Plex_Mono',system-ui,sans-serif] font-normal text-[12px] leading-[18px] text-[var(--text-color)] no-underline transition-all duration-500 hover:text-[var(--text-color)] cursor-pointer">Contact</Link>
          <Link
            className="font-['IBM_Plex_Mono',system-ui,sans-serif] font-normal text-[12px] leading-[18px] text-[var(--text-color)] no-underline transition-all duration-500 cursor-pointer border border-[var(--color-secondary-purple)] px-[7px] py-[4px] rounded-[10px] hover:border-[1.5px] hover:bg-[var(--color-secondary-purple)] hover:text-white"
            href="/Sixtus_Nwaogu.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </Link>
        </span>
      </nav>

      {/* Mobile Nav */}
      <nav className={`md:hidden flex-col w-[90%] mx-auto h-full ${open ? 'hidden' : 'flex'}`}>
        <span className="flex justify-between items-center w-full h-full">
          <Link href="#Home" className="text-[21px] leading-[28px] text-[var(--color-secondary-purple)] font-normal font-['Gochi_Hand','Courier_New',Courier,monospace] no-underline w-auto">
            {sixtus}
          </Link>

          <span className="flex items-center gap-[30px] w-auto">
            <div className="flex cursor-pointer text-[var(--text-color)]" onClick={handleThemeChange}>
              {theme === "dark" ? <IconSunDim size={30} /> : theme === "light" ? <IconMoonStars size={30} /> : null}
            </div>

            <IconListDashes onClick={handleOpen} className="cursor-pointer text-[var(--text-color)]" size={30} />
          </span>
        </span>
      </nav>

      {/* Mobile Menu Overlay */}
      {open && (
        <span className="fixed inset-0 w-screen h-screen flex flex-col bg-[var(--background-color)] z-[100]">
          <span className="flex justify-between items-center w-[90%] h-[10%] mx-auto">
            <Link href="#Home" className="text-[21px] leading-[28px] text-[var(--color-secondary-purple)] font-normal font-['Gochi_Hand','Courier_New',Courier,monospace] no-underline w-auto">
              {sixtus}
            </Link>
            <IconX className="cursor-pointer text-[var(--text-color)] w-auto" onClick={handleClose} size={30} />
          </span>

          <span className="flex h-[90%] w-[90%] mx-auto flex-col pt-[5%] gap-[30px]">
            <Link
              href="/Sixtus_Nwaogu.pdf"
              target="_blank"
              rel="noreferrer"
              className="border border-[var(--color-secondary-purple)] bg-[var(--color-secondary-purple)] px-[5px] py-[3px] rounded-[5px] text-white w-fit font-['IBM_Plex_Mono',system-ui,sans-serif] font-normal text-[18px] leading-[25px] no-underline"
            >
              Resume
            </Link>
            <Link href="#Contact" onClick={handleClose} className="w-auto text-[18px] text-[var(--text-color)] leading-[25px] font-normal no-underline font-['IBM_Plex_Mono',system-ui,sans-serif]">Contact</Link>
            <Link href="#Skills" onClick={handleClose} className="w-auto text-[18px] text-[var(--text-color)] leading-[25px] font-normal no-underline font-['IBM_Plex_Mono',system-ui,sans-serif]">Skills</Link>
            <Link href="#Education" onClick={handleClose} className="w-auto text-[18px] text-[var(--text-color)] leading-[25px] font-normal no-underline font-['IBM_Plex_Mono',system-ui,sans-serif]">Education</Link>
            <Link href="#About" onClick={handleClose} className="w-auto text-[18px] text-[var(--text-color)] leading-[25px] font-normal no-underline font-['IBM_Plex_Mono',system-ui,sans-serif]">About</Link>

            <span className="flex gap-[25px] w-auto h-[20%] mt-4">
              <Link href="https://github.com/6twos55" target="_blank" rel="noreferrer" className="text-[var(--text-color)]">
                <IconGithubLogo size={25} />
              </Link>
              <Link href="https://linkedin.com/in/sixtus-nwaogu/" target="_blank" rel="noreferrer" className="text-[var(--text-color)]">
                <IconLinkedinLogo size={25} />
              </Link>
              <Link href="https://x.com/6two_s55" target="_blank" rel="noreferrer" className="text-[var(--text-color)]">
                <IconTwitterLogo size={25} />
              </Link>
              <Link href="https://www.instagram.com/6two_s55/" target="_blank" rel="noreferrer" className="text-[var(--text-color)]">
                <IconInstagramLogo size={25} />
              </Link>
            </span>

            <div className="flex flex-col w-auto h-auto mt-auto mb-8 text-center gap-1">
              <span className="flex justify-center gap-[4px] w-auto">
                <small className="font-['IBM_Plex_Mono',system-ui,sans-serif] font-normal text-[11px] leading-[14px] text-[var(--text-color)] cursor-default transition-all duration-500">
                  &copy; {new Date().getFullYear()} Sixtus Nwaogu. All Rights Reserved.
                </small>
              </span>

              <span className="w-auto">
                <small className="font-['IBM_Plex_Mono',system-ui,sans-serif] font-normal text-[11px] leading-[14px] text-[var(--text-color)] cursor-default transition-all duration-500">
                  Built with React.js and Tailwind CSS.
                </small>
              </span>
            </div>
          </span>
        </span>
      )}
    </header>
  );
};

export default Header;
