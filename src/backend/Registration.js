import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Registration = () => {

    const [userRegistration, setuserRegistration] = useState({
        fname: "",
        uname: "",
        email: "",
        password: ""
    });

    const [reconrds, setRecords] = useState([]);

    const handleInput =(e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setuserRegistration({...userRegistration, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const newRecord = {...userRegistration, id: new Date().getTime().toString()};

        setRecords([...reconrds, newRecord])

        setuserRegistration({uname:"", fname:"", email:"", password:""})

    }

  return (
    <>
        <section className="contact section" id="contact">
                <span className="section__subtitle">Connect with us</span>
                <h2 className="section__title">Sign Up</h2>

                <div className="contact__container container grid">
                    <div className="contact_content">
                        <h3 className="contact_title">Registration Form</h3>

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
                        <h3 className="contact__title">Please Fill up input </h3>

                        <form className="contact__form">
                            <div className="contact__form-div">
                                <label className="contact__form-tag">Select your Country</label>
                                <input type="text" placeholder="Select" className="contact__form-input"/>
                            </div>
                            <div className="contact__form-div">
                                <label className="contact__form-tag">Full name</label>
                                <input type="text" name="fname" value={userRegistration.fname} onChange={handleInput} placeholder="Insert your name" className="contact__form-input"/>
                            </div>
                            <div className="contact__form-div">
                                <label className="contact__form-tag">User name</label>
                                <input type="text" name="uname" value={userRegistration.uname} onChange={handleInput} autoComplete='off' placeholder="Insert your user name" className="contact__form-input"/>
                            </div>
                            <div className="contact__form-div">
                                <label className="contact__form-tag">Mail</label>
                                <input type="email" name="email" value={userRegistration.email} onChange={handleInput} placeholder="Insert your email" className="contact__form-input"/>
                            </div>
                            <div className="contact__form-div">
                                <label className="contact__form-tag">Create new password</label>
                                <input type="password" name="password" value={userRegistration.password} onChange={handleInput} autoComplete='off' placeholder="Insert your new password" className="contact__form-input"/>
                            </div>

                            <button onClick={handleSubmit} type='submit' className="button">Sing Up</button>
                        </form>

                        <div>
                            {
                                reconrds.map((curElem) =>{

                                    const {id, fname, uname, email, password} = curElem;
                                    return(
                                        <div key={id}>
                                        <p>{fname}</p>
                                        <p>{uname}</p>
                                        <p>{email}</p>
                                        <p>{password}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Registration