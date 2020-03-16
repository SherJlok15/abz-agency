import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

import './Banner.scss';

const Banner = (props) => {
  return (
        <section className="banner" id="banner">
          <div className="page_container">
            <div className="banner-container">
              <Fade left>
                <h2 className="banner__title title">
                  Test assignment for Frontend Developer position
                </h2>
              </Fade>

              <Fade left>
                <p className="banner__text">
                  We kindly remind you that your test assignment should be submitted as a
                  link to github/bitbucket repository. Please be patient, we consider and
                  respond to every application that meets minimum requirements. We look
                  forward to your submission. Good luck! The photo has to scale in the banner
                  area on the different screens
                </p>
              </Fade>

              <Fade left>
                <button className="banner__button">
                  <Link
                    activeClass="active"
                    to="register-form"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={500}
                  >
                    Sing up now
                  </Link>
                </button>
              </Fade>
            </div>
          </div>
        </section>
  );
}

export default Banner;
