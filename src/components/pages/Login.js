import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from '../contact/TextField';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import './_login.scss';
import HamburgerMenu from "../nav/HamburgerMenu";
import img1 from '../../assets/Decoration.svg';
function Login() {

    const validate = Yup.object({
        email: Yup.string()
            .email('Podany e-mail jest nieprawidłowy!')
            .required('Podany e-mail jest nieprawidłowy!'),
        password: Yup.string()
            .min(6, 'Musi zawierać conajmniej 6 znaków!')
            .required('Podane hasło jest nieprawidłowe!'),
    })
    
    return (
        <div className="login">
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
            <div className="login_first-container">
                <div className="login_first-container_title">Zaloguj się</div>
                <img src={img1} 
                     alt="obrazek dekoracyjny" 
                     className="login_first-container_image" 
                />
            </div>
            <div className="login_second-container">
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={validate}
                    onSubmit={(values, actions) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                        }, 1000);   
                    }}
                >
                    {formik => (
                        <div className='login_second-container_form'>
                            <Form>
                                <div className="login_second-container_form_first">
                                    <div className="login_second-container_form_first-name">
                                        <TextField 
                                            className="login_second-container_form_first-name-email" 
                                            label="Email" 
                                            name="email" 
                                            type="email" 
                                        />
                                    </div>
                                    <div className="login_second-container_form_first-name-label">
                                        <TextField className="login_second-container_form_first-name-password" 
                                        label="Hasło" 
                                        name="password" 
                                        type="password" 
                                    />
                                    </div>
                                </div>
                                <div className="login_second-container_form">
                                    <Link to='/rejestracja'>
                                        <div className="login_second-container_form_login">
                                            Załóż konto
                                        </div> 
                                    </Link>
                                    <button className="login_second-container_form_registration"
                                        type='submit'
                                    >
                                        Zaloguj się
                                    </button> 
                                </div>
                            </Form>
                        </div>
                    )}
                </Formik>  
            </div>
        </div>
        
    )
}

export default Login;