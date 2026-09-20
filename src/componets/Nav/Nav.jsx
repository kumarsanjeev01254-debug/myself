
import React, { useRef } from "react";
import "./nav.css";
import { Link } from "react-scroll";

function Nav() {
  const menu = useRef();
  const mobile = useRef();

  const closeMobileMenu = () => {
    mobile.current.classList.remove("activemobile");
    menu.current.classList.remove("activehem");
  };

  const toggleMenu = () => {
    mobile.current.classList.toggle("activemobile");
    menu.current.classList.toggle("activehem");
  };

  return (
    <div className="Nav">
      <h1>PORTFOLIO</h1>

      {/* Desktop Menu */}
      <ul className="Desktopmenu">
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>Home</li>
        </Link>

        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>About</li>
        </Link>

        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>Projects</li>
        </Link>

        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>Contact</li>
        </Link>
      </ul>

      {/* Hamburger */}
      <div
        className="hemburger"
        ref={menu}
        onClick={toggleMenu}
      >
        <div className="hem"></div>
        <div className="hem"></div>
        <div className="hem"></div>
      </div>

      {/* Mobile Menu */}
      <ul className="mobilemenu" ref={mobile}>
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeMobileMenu}
        >
          <li>Home</li>
        </Link>

        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeMobileMenu}
        >
          <li>About</li>
        </Link>

        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeMobileMenu}
        >
          <li>Projects</li>
        </Link>

        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          onClick={closeMobileMenu}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;

