import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import useLocalStorage from "use-local-storage";


const Navbar = () => {

    const [theme, setTheme] = useLocalStorage('theme' ? 'dark-theme' : 'light-theme')

    const switchTheme = () => {
    const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    setTheme(newTheme)
    
    if(theme === 'light-theme'){
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }else{
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    }
  }

  if(theme === 'light-theme'){
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }else{
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    }

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
    }, []);



  return (
    <>
        <header className={scroll ? "scroll-header header" : "header"} id="header">
            <nav className="nav container">
                <Link to="/" className="nav__logo">Ansel</Link>

                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <Link to="#home" className="nav__link active-link">
                                <i className="bx bx-home-alt"></i>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="#about" className="nav__link">
                                <i className="bx bx-user"></i>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="#skills" className="nav__link">
                                <i className="bx bx-book"></i>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="#work" className="nav__link">
                                <i className="bx bx-briefcase-alt-2"></i>
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to="#contact" className="nav__link">
                                <i className="bx bx-message-square-detail"></i>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* <!-- Theme change button --> */}
                <span className={theme} id='dark'>
                    <i className='bx bx-sun change-theme' id="theme-light" onClick={switchTheme}></i>
                    <i className='bx bx-moon change-theme' id='theme-dark' onClick={switchTheme}></i>
                    
                </span>
            </nav>
        </header>
    </>
  )
}

export default Navbar