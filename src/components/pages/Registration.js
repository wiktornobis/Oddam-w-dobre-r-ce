import React, { useRef, useState } from 'react';
import { TextField } from '../contact/TextField';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

import img1 from '../../assets/Decoration.svg';
import Navigation from '../nav/Navigation';
import { Form } from 'formik';

function Registration() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup, currentUser } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
    
        try {
          setError("")
          setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value)
          navigate("/")
        } catch {
          setError("Failed to create an account")
        }
    
        setLoading(false)
      }

    

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
            <div className="login_second-container">                 
                <div className='login_second-container_form'>
                    {currentUser.email}
                        {error && <p>Error</p>}
                    <Form onSubmit={handleSubmit}>
                        <div className="login_second-container_form_first">
                            <div className="login_second-container_form_first-name">
                                <TextField 
                                    className="login_second-container_form_first-name-email" 
                                    label="Email" 
                                    name="email" 
                                    type="email" 
                                    ref={emailRef}
                                />
                            </div>
                            <div className="login_second-container_form_first-name-label">
                                <TextField className="login_second-container_form_first-name-password" 
                                label="Hasło" 
                                name="password" 
                                type="password" 
                                ref={passwordRef}
                            />
                            </div>
                            <div className="login_second-container_form_first-name-label">
                                <TextField className="login_second-container_form_first-name-password" 
                                label="Powtórz hasło" 
                                name="confirmPassword" 
                                type="password"
                                ref={passwordConfirmRef}
                            />
                            </div>
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
                                        disabled={loading}
                                >
                                    Załóż konto
                                </button> 
                            </div>
                        </div>
                    </Form>
                </div>           
            </div>
        </div>
        
    )
}


export default Registration;