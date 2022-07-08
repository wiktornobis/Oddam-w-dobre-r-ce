import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from './TextField';
import { Field } from './Field';

import './_contact.scss';
import './_formMobile.scss';
import img1 from '../../assets/Decoration.svg';
import Navigation from '../nav/Navigation';


function FormMobile() {
    const validate = Yup.object({
        firstName: Yup.string()
            .min(3, 'Musi zawierać conajmniej 3 znaki!')
            .required('Podane imię jest nieprawidłowe!'),
        email: Yup.string()
            .email('Podany e-mail jest nieprawidłowy!')
            .required('Podany e-mail jest nieprawidłowy!'),
        textarea: Yup.string()
            .min(120, 'Wiadomość musi mieć conajmniej 120 znaków!')
            .required('Wiadomość musi mieć conajmniej 120 znaków!'),
    })
    return (
        <div className="form">
            <Navigation />
            <div id='kontakt' className="form_mobile">
                <div className='form_mobile_container'>
                    <h3 className="form_mobile_title">Skontaktuj się z nami</h3>
                    <div className="form_mobile_image">
                        <img src={img1} alt="dekoracja" className="form_mobile_img" />
                    </div>
                    <Formik
                        initialValues={{
                            firstName: '',
                            email: '',
                            textarea: '',
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
                            <div className='contact_right_form'>
                                <Form>
                                    <div className="contact_right_form_first">
                                        <div className="contact_right_form_first-name">
                                            <TextField label="Wpisz swoje imię" name="firstName" type="text" placeholder='Krzysztof' />
                                        </div>
                                        <div className="contact_right_form_first-name">
                                            <TextField label="Email" name="email" type="email" placeholder='abc@xyz.pl' />
                                        </div>
                                    </div>
                                    <div className="contact_right_form_first-text">
                                        <Field 
                                            className="contact_right_form_first-text-area" 
                                            label="Wpisz swoją wiadomość" 
                                            name="textarea" 
                                            type="textarea" 
                                            placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat.' 
                                        />
                                    </div>
                                    <div className="contact_right_form_first-btn">
                                        <button className="contact_right_form_first-btn-submit" type="submit">Wyślij</button> 
                                    </div>
                                </Form>
                            </div>
                        )}
                    </Formik>  
                </div>
            </div>
        </div>
    );
}

export default FormMobile;