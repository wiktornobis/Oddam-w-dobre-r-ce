import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

import './_contactMobile.scss';

function ContactMobile(props) {
    return (
        <div className="contact_mobile">
            <div className="contact_mobile_circle"></div>
            <div className="contact_mobile_container">
                <h3 className="contact_mobile_container-title">Skontaktuj się z nami</h3>
                <FontAwesomeIcon  
                    className="contact_mobile_container-icon-first"
                    icon={faEnvelope} 
                />
                <FontAwesomeIcon  
                    icon={faPhone} 
                    className="contact_mobile_container-icon-second"
                />   
            </div>
        </div>
    );
}

export default ContactMobile;