import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from '../../context/Auth.Context';

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
          console.log(e.message);
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
            <div className="form_auth">   
                    <form 
                        className='form_auth_back'
                        onSubmit={handleSubmit}
                    >
                        <div className="form_auth_container">
                            <label>Email</label>
                            <input className="form_auth_input" 
                                   type="email"
                                   onChange={(e) => setEmail(e.target.value)}
                            /> 
                        </div>
                            <div className="form_auth_container">
                                <label>Hasło</label>
                                <input className="form_auth_input" 
                                       type="password" 
                                       onChange={(e) => setPassword(e.target.value)}
                                />   
                            </div>
                            <div className="form_auth_container">
                                <label>Powtórz hasło</label>
                                <input className="form_auth_input" 
                                       type="password" 
                                       onChange={(e) => setConfirmPassword(e.target.value)}
                                       
                                />                 
                            </div>
                        <div className="container_mobile">
                            <div className="login_second-container_form">
                                <Link to='/zaloguj'>
                                    <div className="login_second-container_form_login">
                                        Zaloguj się
                                    </div> 
                                </Link>
                                <button className="login_second-container_form_registration"
                                    type='submit'
                                >
                                    Załóż konto
                                </button> 
                            </div>
                        </div>
                    </form>
                </div>
        </div>
        
    )
}


export default Registration;