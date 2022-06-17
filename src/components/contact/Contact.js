import './_contact.scss';
import img from '../../assets/Background-Contact-Form.jpg';
import img2 from '../../assets/Decoration.svg';

import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

function Contact() {

    const validate = Yup.object({
        firstName: Yup.string()
          .max(1, 'Must be 1 characters or less')
          .required('Podane imię jest nieprawidłowe!'),
        email: Yup.string()
          .email('Email is invalid')
          .required('Podany e-mail jest nieprawidłowy!'),
        text: Yup.string()
          .min(120, 'Wiadomość musi mieć conajmniej 120 znaków!')
          .required('Wiadomość musi mieć conajmniej 120 znaków!'),
      
      })

    return (
        <div className="contact">
            <div className="contact_left">
                <img src={img} alt="ubrania" className="contact_left_image" />
            </div>
            <div className="contact_right">
                <h3 className="contact_right_title">Skontaktuj się z nami</h3>
                <img src={img2} alt="ubrania" className="contact_left_img" />

                   

                    <Formik
                        initialValues={{
                            firstName: '',
                            email: '',
                            text: '',

                        }}
                        validationSchema={validate}
                        onSubmit={values => {
                            console.log(values)
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
                                    <TextField label="Wpisz swoją wiadomość" name="text" type="text" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
                                </div>
                                <button className="btn btn-dark mt-3" type="submit">Wyślij</button> 
                            </Form>
                            </div>
                        )}
                    </Formik>

                    
            </div>
        </div>
    );
}

export default Contact;