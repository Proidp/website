import React from 'react'
import { Link } from 'react-router-dom'
import HomeImg from '../img/perfil.png'


const HomeSection = () => {
  return (
    <>
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__data">
                        <span className="home__greeting">Hello, I'm</span>
                        <h1 className="home__name">Ansel Klee</h1>
                        <h3 className="home__education">Frontend Developer</h3>

                        <div className="home__buttons">
                            <Link to="assets/pdf/Ansel-Cv.pdf" className="button button--ghost">
                                Download CV
                            </Link>
                            <Link to="#about" className="button">About Me</Link>
                        </div>
                    </div>

                    <div className="home__handle">
                        <img src={HomeImg} alt="" className="home__img"/>
                    </div>

                    <div className="home__social">
                        <Link to="" target="_blank" className="home__social-link">
                            <i className='bx bxl-linkedin-square'></i>
                        </Link>
                        <Link to="" target="_blank" className="home__social-link">
                            <i className='bx bxl-github' ></i>
                        </Link>
                        <Link to="" target="_blank" className="home__social-link">
                            <i className="bx bxl-dribbble"></i>
                        </Link>
                    </div>

                    <Link to="#about" className="home__scroll">
                        <i className="bx bx-mouse home__scroll-icon"></i>
                        <span className="home__scroll-name">Scroll Down</span>
                    </Link>
                </div>
            </section>
    </>
  )
}

export default HomeSection