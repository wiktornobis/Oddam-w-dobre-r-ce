import { Link, useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { UserAuth } from "../../context/Auth.Context";

import HamburgerMenu from "../nav/HamburgerMenu";
import './_oddajRzeczy.scss';
import image1 from '../../assets/Decoration.svg';
import Contact from '../contact/Contact';
import ContactMobile from '../contact/ContactMobile';
import StepsForm from "./StepsForm";


function OddajRzeczy() {
    const {user, logout} = UserAuth();
    const Navigate = useNavigate();

    const handleLogout = async() => {
        try {
            await logout()
            Navigate('/wylogowano')
        }catch(e) {
            console.log(e.message)
        }
    }
     
    return (
        <div className="return">
            <nav className="nav_menu">
                <div className="nav_menu_login">
                    <div className="nav_menu_login_first-column">
                        {user && 
                        <li className="nav_menu_login_first-column-email">
                            {`Cześć ${user.email}`}
                        </li>
                        }
                        {user && 
                        <li className="nav_menu_login_first-column-title">
                            <Link to='/oddaj-rzeczy'>Oddaj rzeczy</Link>
                        </li>
                        }
                        {user && 
                        <li className="nav_menu_login_first-column-logout"
                            onClick={handleLogout}
                        >
                            Wyloguj się
                        </li>
                        }
                        {!user && 
                        <li id="zaloguj" className="nav_menu_login_first-column_text">
                            <Link to='/zaloguj'>Zaloguj</Link> 
                        </li>
                        }
                        {!user && 
                        <li id="rejestracja" className="nav_menu_login_first-column_text-second">
                            <Link to='/rejestracja'>Załóż konto</Link> 
                        </li>
                        }  
                    </div>
                    <ul className="nav_menu_login_second-column">
                        <HamburgerMenu />
                        <li className="nav_menu_login_second-column_text-decoration">
                            <Link to='/'>Start</Link>
                        </li>
                        <HashLink
                            to="/#o-co-chodzi"
                            scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                            >
                            <li className="nav_menu_login_second-column_text">O co chodzi?</li>
                        </HashLink>
                        <HashLink
                            to="/#o-nas"
                            scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                            >
                            <li className="nav_menu_login_second-column_text">O nas</li>
                        </HashLink>        
                        <HashLink
                            to="/#fundacja"
                            scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                            >
                            <li className="nav_menu_login_second-column_text">Fundacja i organizacje</li>
                        </HashLink>
                        <HashLink
                            to="/#kontakt"
                            scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                            >
                            <li className="nav_menu_login_second-column_text">Kontakt</li>
                        </HashLink>
                    </ul>
                </div>
            </nav>
            <div className="return_container">
                <div className="return_container-left"></div>
                <div className="return_container-right">
                    <h2 className="return_container-right-title">
                        Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM
                    </h2>
                    <img src={image1} 
                         alt="obrazek dekoracyjny" 
                         className="return_container-right-img"
                    />
                    <p className="return_container-right-paragraph">
                        Wystarczą 4 proste kroki:
                    </p>
                    <div className="return_container-right-square">
                        <div className="return_container-right-square-first"></div>
                        <div className="return_container-right-square-second"></div>
                        <div className="return_container-right-square-third"></div>
                        <div className="return_container-right-square-fourth"></div>
                    </div>
                </div>
            </div>
            <StepsForm />     
            <Contact />
            <ContactMobile />
        </div>
    );
}

export default OddajRzeczy;