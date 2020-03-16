import React from 'react';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import './AboutMe.scss';
import AboutMePikchure from '../../images/about-me_pikchure.svg';

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <div className="page_container">
        <div className="about-me__container">

          <Fade top>
            <h2 className="aboute-me__title title">
              Let's get acquainted
            </h2>
          </Fade>


          <div className="about-me__content">

            <Fade left>
              <div className="about-me__content__pikchure">
                <img src={AboutMePikchure} alt="about me pikchure"/>
              </div>
            </Fade>

            <Fade right>
              <div className="about-me__content__information">
                <h3 className="information__title">
                  I am cool frontend developer
                </h3>

                <p className="information__text">

                    We will evaluate how clean your approach to writing CSS and Javascript
                    code is. You can use any CSS and Javascript 3rd party libraries without
                    any restriction.

                  <br/>
                  <br/>

                    If 3rd party css/javascript libraries are added to the
                    project via bower/npm/yarn you will get bonus points. If you use any task
                    runner (gulp/webpack) you will get bonus points as well. Slice service directory
                    page P​SD mockup​ into HTML5/CSS3.

                </p>

                <button className="information__button">
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
              </div>
            </Fade>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
