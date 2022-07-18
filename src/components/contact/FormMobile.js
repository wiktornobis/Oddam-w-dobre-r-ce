import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField } from './TextField';
import { Field } from './Field';
import { useState } from 'react';
import Axios from 'axios';

import './_contact.scss';
import './_formMobile.scss';
import img1 from '../../assets/Decoration.svg';
import Navigation from '../nav/Navigation';


function FormMobile() {
    const [modal, setModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);

    const validate = Yup.object({
        name: Yup.string()
            .min(3, 'Musi zawierać conajmniej 3 znaki!')
            .required('Podane imię jest nieprawidłowe!')
            .trim('Nie może być spacji')
            .strict(true),
        email: Yup.string()
            .email('Podany e-mail jest nieprawidłowy!')
            .required('Podany e-mail jest nieprawidłowy!'),
        message: Yup.string()
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
                            name: '',
                            email: '',
                            message: '',
                        }}
                        validationSchema={validate}
                        onSubmit={async (values, {resetForm}) => {
                            const data = {
                                name:values.name,
                                email: values.email,
                                message: values.message,                    
                            }
                            resetForm()
    
                            const axiosConfig = {
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }
                            await Axios.post(
                                'https://fer-api.coderslab.pl/v1/portfolio/contact',
                                JSON.stringify(data),
                                axiosConfig
                            )
                                .then((response) => {
                                    setModal(true)          
                                })
                                
                                .catch((e) => {
                                    setErrorModal(true)
                                })
                        }}
                    >
                        {({values, isSubmitting }) => (
                            <div className='contact_right_form'>
                                <Form>
                                    {errorModal && <p className='error-send'>Nie udało się wysłać wiadomości!</p>}
                                    {modal && <p className='success-send'>Wiadomość została wysłana!</p>}
                                    {modal && <p className='success-send'>Wkrótce się skontaktujemy.</p>}

                                    <div className="contact_right_form_first">
                                        <div className="contact_right_form_first-name">
                                            <TextField label="Wpisz swoje imię" 
                                                    name="name" 
                                                    id="name"
                                                    type="text" 
                                                    placeholder='Krzysztof' 
                                                    value={values.name}
                                            />
                                        </div>
                                        <div className="contact_right_form_first-name">
                                            <TextField label="Email" 
                                                    name="email" 
                                                    id="email"
                                                    type="email" 
                                                    placeholder='abc@xyz.pl' 
                                                    value={values.email}
                                            />
                                        </div>
                                    </div>
                                    <div className="contact_right_form_first-text">
                                        <Field 
                                            className="contact_right_form_first-text-area" 
                                            label="Wpisz swoją wiadomość" 
                                            name="message"
                                            id="message" 
                                            type="message" 
                                            placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat.' 
                                            value={values.message}
                                        />
                                    </div>
                                    <div className="contact_right_form_first-btn">
                                        <button className="contact_right_form_first-btn-submit" 
                                                type="submit"
                                        >
                                            Wyślij
                                        </button> 
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