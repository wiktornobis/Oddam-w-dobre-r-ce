import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import './_nav.scss';
import image1 from '../../assets/Home-Hero-Image.jpg'
import image2 from '../../assets/Decoration.svg'

function Nav() {
    return (
        <nav className="nav">
            <div className="left">
                <img className='left_image' src={image1} alt="przykładowe rzeczy" />
            </div>

                <div className="right">
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

                <div className="right_third-column">
                    <h1 className="right_third-column_text">Zacznij pomogać!</h1>
                    <h2 className="right_third-column_text">Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img className='right_third-column_img' src= {image2} alt="obrazek dekoracyjny" />
                </div>

                <div className="right_fourth-column">
                    <div className="right_fourth-column-first">
                        <Link to='/zaloguj'>
                            <li className="right_fourth-column-first_text">Oddaj rzeczy</li> 
                        </Link>
                    </div>
                    <div className="right_fourth-column-second">
                        <h2 className="right_fourth-column-second_text">Zorganizuj</h2>
                        <h2 className="right_fourth-column-second_text">zbiórkę</h2>
                    </div>
                </div>


                

            </div>

        </nav>

    );
}

export default Nav;