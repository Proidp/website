import React from 'react'
import { Link } from 'react-router-dom'


const ContactSection = () => {
  return (
    <>
    <section className="contact section" id="contact">
                <span className="section__subtitle">Get in touch</span>
                <h2 className="section__title">Contact Me</h2>

                <div className="contact__container container grid">
                    <div className="contact_content">
                        <h3 className="contact_title">Talk to me</h3>

                        <div className="contact__info">
                            <div className="contact__card">
                                <i className="bx bx-mail-send contact__card-icon"></i>
                                <h3 className="contact__card-title">Email</h3>
                                <span className="contact__card-data">user@gmail.com</span>

                                <Link to="mailto:examplemail@correo.com" target="_blank" className="contact__button">
                                    Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                </Link>
                            </div>
                            <div className="contact__card">
                                <i className="bx bxl-whatsapp contact__card-icon"></i>
                                <h3 className="contact__card-title">Whatsapp</h3>
                                <span className="contact__card-data">999-888-777</span>

                                <Link to="https://api.whatsapp.com/send?phone=51123456789&text=Hello, more information!" target="_blank" className="contact__button">
                                    Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                </Link>
                            </div>
                            <div className="contact__card">
                                <i className="bx bxl-messenger contact__card-icon"></i>
                                <h3 className="contact__card-title">Messenger</h3>
                                <span className="contact__card-data">user.fb123</span>

                                <Link to="https://m.me/bedimcode" target="_blank" className="contact__button">
                                    Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="contact__content">
                        <h3 className="contact__title">Write me your project</h3>

                        <form action="" className="contact__form">
                            <div className="contact__form-div">
                                <label className="contact__form-tag">Names</label>
                                <input type="text" placeholder="Insert your name" className="contact__form-input"/>
                            </div>
                            <div className="contact__form-div">
                                <label className="contact__form-tag">Mail</label>
                                <input type="email" placeholder="Insert your email" className="contact__form-input"/>
                            </div>
                            <div className="contact__form-div contact__form-area">
                                <label className="contact__form-tag">Project</label>
                                <textarea name="" id="" cols="30" rows="10" placeholder="Write your project" className="contact__form-input"></textarea>
                            </div>

                            <button className="button">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
    </>
  )
}

export default ContactSection