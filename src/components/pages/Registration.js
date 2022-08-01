import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from '../../context/Auth.Context';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-solid-svg-icons";

import FormInput from "./FormInput";

import img1 from '../../assets/Decoration.svg';
import Navigation from '../nav/Navigation';
import './_formAuth.scss';

function Registration() {
    const [error, setError] = useState('')
    const [values, setValues] = useState({
        email: "",
        password: "",
        confirmPassword: "",
      });

      const inputs = [
    
        {
          id: 1,
          name: "email",
          type: "email",
          errorMessage: "Błedny format e-mail",
          label: "Email",
          required: true,
        },
        {
          id: 2,
          name: "password",
          type: "password",
          errorMessage:
            "Hasło musi mieć 8-20 znaków i zawierać 1 wielką literę, 1 number i 1 znak specjalny!",
          label: "Hasło",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
        {
          id: 3,
          name: "confirmPassword",
          type: "password",
          errorMessage: "Hasła nie są takie same",
          label: "Powtórz hasło",
          pattern: values.password,
          required: true,
        },
      ];

      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

    const { createUser } = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
          await createUser(values.email, values.password, values.confirmPassword);
          navigate('/zaloguj')
        } catch (e) {
          setError(e.message)
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
                <div className="error_login">
                     <FontAwesomeIcon icon={faCircleXmark} className='error_login_circle' /> 
                    <p className='error_login_title'>Użytkownik z podanym adresem e-mail już istnieje.</p>
                </div>
            }
            <div className="form_auth">   
                    <form 
                        onSubmit={handleSubmit}
                    >
                        <div className="form_auth_container">
                        {inputs.map((input) => (
                            <FormInput
                                key={input.id}
                                {...input}
                                value={values[input.name]}
                                onChange={onChange}
                                />
                                ))}
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