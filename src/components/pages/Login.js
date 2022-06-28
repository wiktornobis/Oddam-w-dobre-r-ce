import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from '../contact/TextField';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

import './_login.scss';
import img1 from '../../assets/Decoration.svg';
function Login() {

    const validate = Yup.object({
        email: Yup.string()
            .email('Podany e-mail jest nieprawidłowy!')
            .required('Podany e-mail jest nieprawidłowy!'),
        password: Yup.string()
            .min(3, 'Musi zawierać conajmniej 3 znaki!')
            .required('Podane hasło jest nieprawidłowe!'),
    })
    
    return (
        <div className="login">
            <nav className="nav ">
                    <div className="right nav_login">
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
            <div className="login_first-container">
                <div className="login_first-container_title">Zaloguj się</div>
                <img src={img1} alt="obrazek dekoracyjny" className="login_first-container_image" />
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
                                    <div className="login_second-container_first-name">
                                        <TextField label="Email" name="email" type="email" />
                                    </div>
                                    <div className="login_second-container_form_first-name">
                                        <TextField label="Hasło" name="password" type="password" />
                                    </div>
                                </div>
                        
                
                                <div className="login_second-container_form_first-btn">
                                    <button className="login_second-container_form_first-btn-submit" type="submit">Wyślij</button> 
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