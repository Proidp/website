import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const ServiceSection = () => {
    return ( 
    <>
        <section className="services section">
            <span className="section__subtitle"> My Services </span>
            <h2 className="section__title"> What I Offer </h2>
            <div className="services__container container grid">
                <div className="services__card">
                <h3 className="services__title"> Product <br /> Designer </h3>
                
                <Popup
                    trigger={<span className="services__button"> See more <i className="bx bx-right-arrow-alt services__icon"></i>
                    </span>}
                    modal
                    nested
                >
                    {close => (
                    <div className="modal">

                        <div className="services__modal">
                    <div className="services__modal-content">
                    <i className="bx bx-x services__modal-close" onClick={close}></i>
                    <h3 className="services__modal-title"> Product Designer </h3>
                    <p className="services__modal-description"> Service with more than 3 years of experience.Providing quality work to clients and companies. </p>
                    <ul className="services__modal-list">
                        <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info"> I develop the user interface. </p>
                        </li>
                        <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info"> Web page development. </p>
                        </li>
                        <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info"> I create ux element interactions. </p>
                        </li>
                        <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info"> I position your company brand. </p>
                        </li>
                        <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info"> Design and mockups of products for companies. </p>
                        </li>
                    </ul>
                    </div>
                </div>

                    </div>
                    )}
                </Popup>
                
                
                
                </div>
                <div className="services__card">
                <h3 className="services__title"> Ui / Ux <br /> Designer </h3>
                <Popup
                    trigger={<span className="services__button"> See more <i className="bx bx-right-arrow-alt services__icon"></i>
                    </span>}
                    modal
                    nested
                >
                    {close => (
                    <div className="modal">

                        <div className="services__modal">
                    <div className="services__modal-content">
                    <i className="bx bx-x services__modal-close" onClick={close}></i>
                    <h3 className="services__modal-title"> Ui / Ux Designer </h3>
                    <p className="services__modal-description"> Service with more than 3 years of experience.Providing quality work to clients and companies. </p>
                    <ul className="services__modal-list">
                        <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info"> I develop the user interface. </p>
                        </li>
                        <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info"> Web page development. </p>
                        </li>
                        <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info"> I create ux element interactions. </p>
                        </li>
                        <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info"> I position your company brand. </p>
                        </li>
                        <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info"> Design and mockups of products for companies. </p>
                        </li>
                    </ul>
                    </div>
                </div>

                    </div>
                    )}
                </Popup>
                
                </div>
                <div className="services__card">
                <h3 className="services__title"> Visual <br /> Designer </h3>
                <Popup
                    trigger={<span className="services__button"> See more <i className="bx bx-right-arrow-alt services__icon"></i>
                    </span>}
                    modal
                    nested
                >
                    {close => (
                    <div className="modal">

                        <div className="services__modal">
                    <div className="services__modal-content">
                    <i className="bx bx-x services__modal-close" onClick={close}></i>
                    <h3 className="services__modal-title"> Visual Designer </h3>
                    <p className="services__modal-description"> Service with more than 3 years of experience.Providing quality work to clients and companies. </p>
                    <ul className="services__modal-list">
                        <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info"> I develop the user interface. </p>
                        </li>
                        <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info"> Web page development. </p>
                        </li>
                        <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info"> I create ux element interactions. </p>
                        </li>
                        <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info"> I position your company brand. </p>
                        </li>
                        <li className="services__modal-item">
                        <i className="bx bx-check services__modal-icon"></i>
                        <p className="services__modal-info"> Design and mockups of products for companies. </p>
                        </li>
                    </ul>
                    </div>
                </div>

                    </div>
                    )}
                </Popup>
                
                </div>
            </div>
        </section>
    </>
)
}

export default ServiceSection