import "../Styles/footer.scss";
import { IconEnvelope,IconGithubLogo, IconLinkedinLogo, IconTwitterLogo, IconInstagramLogo } from '@vtex/phosphor-icons';

const Footer = () => {
  return (
    <footer >
      <div className="footer-Container" id='Contact'>
        <div data-aos-duration="1000" data-aos="fade-up" className="contact">
          <h2>Hey, I'd love to hear from you.</h2>
          <p>Want to get in touch? I'm open for collaborations!</p>
          <a href='mailto:sixtusnwaogu@gmail.com'  className="mail">
            <span><IconEnvelope /></span>
            <p>Send me a mail.</p>
          </a>
          <span className="link-Container">
            <small>My handles</small>
            <span className='li'>
             <a href='https://github.com/6twos55' target="_blank" rel='noreferrer' title='Github'><IconGithubLogo/></a>
             <a target="_blank" href='https://linkedin.com/in/sixtus-nwaogu-654005240/' rel='noreferrer'  title='LinkedIn'><IconLinkedinLogo/></a>
             <a target="_blank" href='https://twitter.com/NwaoguSixtus' rel='noreferrer'  title='Twitter'><IconTwitterLogo /></a>
             <a href='https://www.instagram.com/6two_s55/' rel='noreferrer'  target="_blank"  title='Instagram'><IconInstagramLogo/></a>
            </span>
          </span>
        </div>
        <div className="all-Rights-Container">
          <span className="rights-Reserved">
            <small>&copy; {new Date().getFullYear()} Sixtus Nwaogu. All Rights Reserved.</small>
          </span>
          <span className="built">
            <small>Built with React.js and Sass.</small>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer