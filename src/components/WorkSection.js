import React from 'react'
import { Link } from 'react-router-dom'
import WorkImg from '../img/work1.jpg'
import WorkImg2 from '../img/work2.jpg'
import WorkImg3 from '../img/work3.jpg'
import WorkImg4 from '../img/work4.jpg'
import WorkImg5 from '../img/work5.jpg'

const WorkSection = () => {



  return (
    <>
    <section className="work section" id="work">
                <span className="section__subtitle">My Portfolio</span>
                <h2 className="section__title">Recent Works</h2>

                <div className="work__filters">
                    <span className="work__item active-work" data-filter="all">All</span>
                    <span className="work__item" data-filter=".web">Web</span>
                    <span className="work__item" data-filter=".movil">Movil</span>
                    <span className="work__item" data-filter=".design">Design</span>
                </div>

                <div className="work__container container gird">
                    <div className="work__card mix web">
                        <img src={WorkImg} alt="" className="work__img"/>

                        <h3 className="work__title">Web design</h3>

                        <Link to="#" className="work__button">
                            Demo <i className="bx bx-right-arrow-alt work__icon"></i>
                        </Link>
                    </div>
                    <div className="work__card mix movil">
                        <img src={WorkImg2} alt="" className="work__img"/>

                        <h3 className="work__title">App movil</h3>

                        <Link to="#" className="work__button">
                            Demo <i className="bx bx-right-arrow-alt work__icon"></i>
                        </Link>
                    </div>
                    <div className="work__card mix design">
                        <img src={WorkImg3} alt="" className="work__img"/>

                        <h3 className="work__title">Brand design</h3>

                        <Link to="#" className="work__button">
                            Demo <i className="bx bx-right-arrow-alt work__icon"></i>
                        </Link>
                    </div>
                    <div className="work__card mix web">
                        <img src={WorkImg4} alt="" className="work__img"/>

                        <h3 className="work__title">Web design</h3>

                        <Link to="#" className="work__button">
                            Demo <i className="bx bx-right-arrow-alt work__icon"></i>
                        </Link>
                    </div>
                    <div className="work__card mix movil">
                        <img src={WorkImg5} alt="" className="work__img"/>

                        <h3 className="work__title">App movil</h3>

                        <Link to="#" className="work__button">
                            Demo <i className="bx bx-right-arrow-alt work__icon"></i>
                        </Link>
                    </div>
                </div>
            </section>
    </>
  )
}

export default WorkSection