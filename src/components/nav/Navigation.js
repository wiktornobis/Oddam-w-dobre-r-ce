import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import '../pages/_login.scss';
import HamburgerMenu from '../nav/HamburgerMenu';

function Navigation() {
    return (
        <nav className="navigation ">
            <HamburgerMenu />
            <div className="nav_menu_login">
                <div className="nav_menu_login_first-column">
                    <li id="zaloguj" className="nav_menu_login_first-column_text">
                        <Link to='/zaloguj'>Zaloguj</Link> 
                    </li>
                    <li id="rejestracja" className="nav_menu_login_first-column_text-second">
                        <Link to='/rejestracja'>Załóż konto</Link> 
                    </li>
                </div>
                <ul className="nav_menu_login_second-column">
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
    );
}

export default Navigation;