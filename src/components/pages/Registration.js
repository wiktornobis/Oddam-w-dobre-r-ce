import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from '../contact/TextField';
import { Link } from "react-router-dom";

import img1 from '../../assets/Decoration.svg';
import Navigation from '../nav/Navigation';

function Registration() {

    const validate = Yup.object({
        email: Yup.string()
            .email('Podany e-mail jest nieprawidłowy!')
            .required('Podany e-mail jest nieprawidłowy!'),
        password: Yup.string()
            .min(6, 'Hasło musi zawierać conajmniej 6 znaków!')
            .required('Hasło musi zawierać conajmniej 6 znaków!'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Hasła muszą być takie same')
            .required('Hasło musi zawierać conajmniej 6 znaków!'),
        })

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
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        confirmPassword: '',
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
                                    <div className="login_second-container_form_first-name-label">
                                        <TextField className="login_second-container_form_first-name-password" 
                                        label="Powtórz hasło" 
                                        name="confirmPassword" 
                                        type="password" 
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
                                        >
                                            Załóż konto
                                        </button> 
                                    </div>
                                </div>
                            </Form>
                        </div>
                    )}
                </Formik>  
            </div>
        </div>
        
    )
}


export default Registration;