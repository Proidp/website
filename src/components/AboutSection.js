import React from 'react'
import { Link } from 'react-router-dom'
import AboutImg from '../img/about.jpg'

const AboutSection = () => {
  return (
    <>
    <section className="about section" id="about">
                <span className="section__subtitle">My Intro</span>
                <h2 className="section__title">About Me</h2>

                <div className="about__container container grid">
                    <img src={AboutImg} alt="" className="about__img"/>

                    <div className="about__data">
                        <div className="about__info">
                            <div className="about__box">
                                <i className="bx bx-award about__icon"></i>
                                <h3 className="about__title">Experience</h3>
                                <span className="about__subtitle">8 Years Working</span>
                            </div>
                            <div className="about__box">
                                <i className="bx bx-briefcase-alt about__icon"></i>
                                <h3 className="about__title">Completed</h3>
                                <span className="about__subtitle">48 + Projects</span>
                            </div>
                            <div className="about__box">
                                <i className="bx bx-award about__icon"></i>
                                <h3 className="about__title">Support</h3>
                                <span className="about__subtitle">Online 24/7</span>
                            </div>
                        </div>

                        <p className="about__description">
                            Frontend developer, I create web pages with UI / UX user interface, 
                            I have years of experience and many clients are happy 
                            with the projects carried out.
                        </p>

                        <Link to="#contact" className="button">Contact Me</Link>
                    </div>
                </div>
            </section>
    </>
  )
}

export default AboutSection