import { useState, useContext } from "react";
import { ThemeContext } from "../App";
import "../Styles/Header.scss";
import sixtusNwaoguResume from "../Assets/Sixtus_Nwaogu.pdf";
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

const Header = () => {
  const sixtus = "Sixtus";
  const size = 32;
  const [open, setOpen] = useState("");
  const [close, setClose] = useState("");
  const [openCont, setOpenCont] = useState("");
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClose = () => {
    setClose("");
    setOpen("");
    setOpenCont("");
  };
  const handleOpen = () => {
    setClose("close");
    setOpen("open");
    setOpenCont("open");
  };

  const handleThemeChange = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <header className="header-Container">
      <nav className="desktop-Nav-Container">
        <a href="#Home" className="sixtus">
          {sixtus}
        </a>

        <span className="navlinks-Container">
          <div style={{ display: "flex" }} onClick={handleThemeChange}>
            {theme === "dark" ? (
              <IconSunDim className="svg" size={30} />
            ) : theme === "light" ? (
              <IconMoonStars className="svg" size={30} />
            ) : (
              ""
            )}
          </div>

          <a href="#About" className="links">
            About
          </a>
          <a href="#Education" className="links">
            Education
          </a>
          <a href="#Skills" className="links">
            Skills
          </a>
          <a href="#Contact" className="links">
            Contact
          </a>
          <a
            className="resume"
            href={sixtusNwaoguResume}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </span>
      </nav>

      <nav className="mobile-Nav-Container" id={openCont}>
        <span className="mobile-Container" id={close}>
          <a href="#Home" className="sixtus">
            {sixtus}
          </a>

          <span>
            <div style={{ display: "flex" }} onClick={handleThemeChange}>
              {theme === "dark" ? (
                <IconSunDim className="svg" size={30} />
              ) : theme === "light" ? (
                <IconMoonStars className="svg" size={30} />
              ) : (
                ""
              )}
            </div>

            <IconListDashes onClick={handleOpen} className="svg" size={30} />
          </span>
        </span>

        <span className="mobile-Links-Container" id={open}>
          <span className="mobile-Container-Two">
            <a href="#Home" className="sixtus">
              {sixtus}
            </a>
            <IconX className="svg" onClick={handleClose} size={30} />
          </span>

          <span className="links-Body">
            <span className="inner-Links-Body">
              <a
                href={sixtusNwaoguResume}
                target="_blank"
                rel="noreferrer"
                className="res"
              >
                Resume
              </a>
              <a href="#Contact" onClick={handleClose} className="links">
                Contact
              </a>
              <a href="#Skills" onClick={handleClose} className="links">
                Skills
              </a>
              <a href="#Education" onClick={handleClose} className="links">
                Education
              </a>
              <a href="#About" onClick={handleClose} className="links">
                About
              </a>

              <span className="handler">
                <a
                  href="https://github.com/6twos55"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconGithubLogo size={size} />
                </a>
                <a
                  href="https://linkedin.com/in/sixtus-nwaogu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconLinkedinLogo size={size} />
                </a>
                <a
                  href="https://x.com/6two_s55"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconTwitterLogo size={size} />
                </a>
                <a
                  href="https://www.instagram.com/6two_s55/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconInstagramLogo size={size} />
                </a>
              </span>

              <div className="all-Rights-Container">
                <span className="rights-Reserved">
                  <small className="small">
                    &copy; {new Date().getFullYear()} Sixtus Nwaogu. All Rights
                    Reserved.
                  </small>
                </span>

                <span className="built">
                  <small>Built with React.js and Sass.</small>
                </span>
              </div>
            </span>
          </span>
        </span>
      </nav>
    </header>
  );
};

export default Header;
