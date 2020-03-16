import React from 'react';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';

import './Header.scss';

import logotip from '../../images/logo.svg';
import open_menu  from '../../images/open-menu.svg';

const Header = ({ show_header_open_menu, toggleOpenMenu }) => {
  return (
    <header className="header" id='header'>
      <div className="page_container">

        <Fade top>
          <div className="header__open-menu">
            <div className="header__logo">
              <Link
                to="banner"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img src={logotip} alt="logotip"/>
                <span>
                  testtask
                </span>
              </Link>
            </div>
            <img src={open_menu} alt="open menu" onClick={toggleOpenMenu} className="open-menu-icon"/>
          </div>

          <div className="header-container">

            <div className="header__logo">
              <Link
                to="banner"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <img src={logotip} alt="logotip"/>
                <span>
                  testtask
                </span>
              </Link>
            </div>

            <nav className="header__navigation">
              <ul>
                <li>
                  <Link
                    activeClass="active"
                    to="banner"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About me
                  </Link>
                </li>
                <li>
                  <Link>
                    Relationships
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="about-me"
                    spy={true}
                    smooth={true}
                    offset={-110}
                    duration={500}
                  >
                    Requirements
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="users"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    Users
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="register-form"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                  >
                    Sign Up
                  </Link>
                </li>
              </ul>
            </nav>
          </div>


          <div className="open-menu">
            <div className={show_header_open_menu ? "header-container-open-menu" : "header-container-open-menu--hide"}>
              <div className="open-menu__logo">
                <Link
                  to="banner"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <img src={logotip} alt="logotip"/>
                  <span>
                    testtask
                  </span>
                </Link>
              </div>
              <nav className="open-menu__navigation">
                <ul>
                  <li>
                    <Link
                      activeClass="active"
                      to="banner"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      About me
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Relationships
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="about-me"
                      spy={true}
                      smooth={true}
                      offset={-110}
                      duration={500}
                    >
                      Requirements
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="users"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                    >
                      Users
                    </Link>
                  </li>
                  <li>
                    <Link
                      activeClass="active"
                      to="register-form"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                    >
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Terms and Conditions
                    </Link>
                  </li>
                </ul>

                <ul>
                  <li>
                    <Link>
                      How it works
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Partnership
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Help
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Leave testimonial
                    </Link>
                  </li>
                  <li>
                    <Link>
                      Contact us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

        </Fade>

      </div>
    </header>
  );
}

export default Header;
