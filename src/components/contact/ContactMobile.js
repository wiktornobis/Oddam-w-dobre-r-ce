import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

import './_contactMobile.scss';
import { Link } from "react-router-dom";

function ContactMobile(props) {
    return (
        <div>
            <div id="kontakt-mobile" className="contact_mobile return_container_third-contact">
                <div className="contact_mobile_circle"></div>
                    <div className="contact_mobile_container">
                        <h3 className="contact_mobile_container-title">Skontaktuj się z nami</h3>
                        <Link to= '/formularz-mobile'>
                            <FontAwesomeIcon  
                                className="contact_mobile_container-icon-first"
                                icon={faEnvelope} 
                            />
                        </Link>
                        <a href="tel:+48666555444">
                            <FontAwesomeIcon  
                                icon={faPhone} 
                                className="contact_mobile_container-icon-second"
                            />  
                        </a> 
                    </div>
            </div>
                <p className="contact_mobile_copyright return_container_third-copyright">Copyright Wiktor Nobis</p>
        </div>
    );
}

export default ContactMobile;