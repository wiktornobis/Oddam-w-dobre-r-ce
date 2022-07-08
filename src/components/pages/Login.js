import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from '../contact/TextField';
import { Link } from "react-router-dom";

import img1 from '../../assets/Decoration.svg';
import Navigation from '../nav/Navigation';
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
            <Navigation />
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
                                <div className="container_mobile">
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