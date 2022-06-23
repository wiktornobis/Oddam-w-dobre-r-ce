import './_login.scss';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Login() {
    return (
        
        <nav className="nav ">
                <div className="right login_nav">
                <div className="right_first-column">
                     <li id="zaloguj" className="right_first-column_text">
                        <Link to='/zaloguj'>Zaloguj</Link> 
                     </li>
                     <li id="rejestracja" className="right_first-column_text-second">
                        <Link to='/rejestracja'>Załóż konto</Link> 
                     </li>
                </div>
                <ul className="right_second-column">
                    <li className="right_second-column_text-decoration">
                        <Link to='/'>Start</Link>
                    </li>
                     <HashLink
                        to="/#o-co-chodzi"
                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                        >
                        <li className="right_second-column_text">O co chodzi?</li>
                    </HashLink>
                    <HashLink
                        to="/#o-nas"
                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                        >
                        <li className="right_second-column_text">O nas</li>
                    </HashLink>        
                    <HashLink
                        to="/#fundacja"
                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                        >
                        <li className="right_second-column_text">Fundacja i organizacje</li>
                    </HashLink>
                    <HashLink
                        to="/#kontakt"
                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}
                        >
                        <li className="right_second-column_text">Kontakt</li>
                    </HashLink>
                </ul>
            </div>
        </nav>
    )
}

export default Login;