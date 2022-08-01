import './_logout.scss';
import { Link } from "react-router-dom";
import Navigation from '../nav/Navigation';
import icon from '../../assets/Decoration.svg';

function Logout() {
    return (
        <>
            <Navigation />
            <div className="logout">
                <h3 className="logout_title">Wylogowanie nastąpiło pomyślnie!</h3>
                <img src={icon} 
                    alt="" 
                    className="logout_img" 
                />
                
                <Link to='/'>
                    <button className="logout_btn">Strona główna</button>
                </Link>
                
            </div>
        </>
    );
}

export default Logout;