import { Link, useNavigate } from "react-router-dom";

import { HashLink } from 'react-router-hash-link';
import { UserAuth } from "../../context/Auth.Context";

import './_nav.scss';
import HamburgerMenu from "./HamburgerMenu";
import image2 from '../../assets/Decoration.svg'

function Nav() {
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
            <div className="nav_menu_hero">
                <div className="nav_menu_hero_left"></div>
                <div className="nav_menu_hero_right">
                    <div className="nav_menu_hero_third-column">
                        <h1 className="nav_menu_hero_third-column_text">Zacznij pomogać!</h1>
                        <h2 className="nav_menu_hero_third-column_text">Oddaj niechciane rzeczy w zaufane ręce</h2>
                        <img className='nav_menu_hero_third-column_img' src= {image2} alt="obrazek dekoracyjny" />
                    </div>
                    <div className="nav_menu_hero_fourth-column">
                        <div className="nav_menu_hero_fourth-column-first">
                            <Link to='/oddaj-rzeczy'>
                                <li className="nav_menu_hero_fourth-column-first_text">Oddaj</li> 
                                <li className="nav_menu_hero_fourth-column-first_text">rzeczy</li> 
                            </Link>
                        </div>
                        <div className="nav_menu_hero_fourth-column-second">
                            <h2 className="nav_menu_hero_fourth-column-second_text">Zorganizuj</h2>
                            <h2 className="nav_menu_hero_fourth-column-second_text">zbiórkę</h2>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default Nav;