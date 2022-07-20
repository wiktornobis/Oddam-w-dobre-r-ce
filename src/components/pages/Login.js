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
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
          await signIn(email, password);
          navigate('/')
        } catch (e) {
          setError(e.message);
        }
      };

    return (
        <div className="login">
            <Navigation />
            <div className="login_first-container">
                <div className="login_first-container_title">Zaloguj się</div>
                <img src={img1} 
                     alt="obrazek dekoracyjny" 
                     className="login_first-container_image" 
                />
            </div>
            {error && 
                <div className="error_login">
                     <FontAwesomeIcon icon={faCircleXmark} className='error_login_circle' />
                      
                    <p className='error_login_title'>Podany login lub hasło nie jest poprawne.</p>
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
                        <div className="form_auth_mobile">
                                <Link to='/rejestracja'>
                                    <p className="form_auth_mobile-login">
                                        Załóż konto
                                    </p> 
                                </Link>
                                <button className="form_auth_mobile-registration"
                                    type='submit'
                                >
                                    Zaloguj się
                                </button> 
                        </div>
                    </form>
                </div>
        </div>
        
    )
}


export default Registration;