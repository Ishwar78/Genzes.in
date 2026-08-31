import { FiDownload } from 'react-icons/fi';
import logo from '../assets/logo.jpeg';
import { APP_LINKS } from '../lib/appLinks.js';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="genzes-nav-wrap">
      <nav className="genzes-nav" aria-label="Primary navigation">
        <a className="genzes-nav__brand" href="/" aria-label="GENZES home">
          <img src={logo} alt="GENZES" />
        </a>

        <a
          className="genzes-nav__download"
          href={APP_LINKS.playStore}
          target="_blank"
          rel="noreferrer"
        >
          Download App <FiDownload aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
