import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from '../../context/Auth.Context';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";



import img1 from '../../assets/Decoration.svg';
import Navigation from '../nav/Navigation';
import './_formAuth.scss';

function Registration() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('')
    const { createUser } = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
          await createUser(email, password, confirmPassword);
          navigate('/zaloguj')
        } catch (e) {
          setError(e.message);
        }
      };

    return (
        <div className="login">
            <Navigation />
            <div className="login_first-container">
                <div className="login_first-container_title">Załóż konto</div>
                <img src={img1} 
                     alt="obrazek dekoracyjny" 
                     className="login_first-container_image" 
                />
            </div>
            {error && 
                <div className="error_registration">
                    <FontAwesomeIcon icon={faCircleXmark} className='error_registration_circle' /> 
                    <p className='error_registration_title'>Użytkownik z podanym adresem e-mail już istnieje.</p>
                </div>
            }
            <div className="form_auth">   
                    <form 
                        className='form_auth_back'
                        onSubmit={handleSubmit}
                    >
                        <div className="form_auth_container">
                            <label className="form_auth_label">Email</label>
                            <input className="form_auth_input" 
                                   type="email"
                                   onChange={(e) => setEmail(e.target.value)}
                            /> 
                        </div>
                            <div className="form_auth_container">
                                <label className="form_auth_label">Hasło</label>
                                <input className="form_auth_input" 
                                       type="password" 
                                       onChange={(e) => setPassword(e.target.value)}
                                />   
                            </div>
                            <div className="form_auth_container">
                                <label className="form_auth_label">Powtórz hasło</label>
                                <input className="form_auth_input" 
                                       type="password" 
                                       onChange={(e) => setConfirmPassword(e.target.value)}
                                       
                                />                 
                            </div>
                        <div className="form_auth_mobile">
                                <Link to='/zaloguj'>
                                    <p className="form_auth_mobile-login">
                                        Zaloguj się
                                    </p> 
                                </Link>
                                <button className="form_auth_mobile-registration"
                                    type='submit'
                                >
                                    Załóż konto
                                </button> 
                        </div>
                    </form>
                </div>
        </div>
        
    )
}


export default Registration;