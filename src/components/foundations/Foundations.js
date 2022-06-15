import { useState } from "react";

import './_foundations.scss';
import img from '../../assets/Decoration.svg';

function Foundations() {
    const [active, setActive] = useState('FirstSection');

    return (
        <div className="container">
            <div className="container_first">
                <h3 className="container_first_title">Komu pomagamy?</h3>
                <img src={img} alt="obrazek dekoracyjny" className="container_first_img" />
            </div>
            <div className="container_second">
                <h4 onClick={() => setActive('FirstSection')} className="container_second_text">Fundacjom</h4>
                <h4 onClick={() => setActive('SecondSection')} className="container_second_text">Organizacjom pozarządowym</h4>
                <h4 onClick={() => setActive('ThirdSection')} className="container_second_text">Lokalnym zbiórkom</h4>
                 
            </div>
            <div id="fundacja" className="container_third">
            {active === 'FirstSection' && 
                <>
                <div className="container_third_text">
                    <p className="container_third_text-first">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p> 
                </div>

                <div className="section">
                    <div className="section_first">
                        <h4 className="section_first_title">Fundacja "Dbam o Zdrowie"</h4>
                        <h5 className="section_first_purpose">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</h5>
                    </div>
                    <div className="section_second">
                        <p className="section_second_text">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    </div>
                </div>

                <div className="section">
                    <div className="section_first">
                        <h4 className="section_first_title">Fundacja “Dla dzieci”"</h4>
                        <h5 className="section_first_purpose">Cel i misja: Pomoc dzieciom z ubogich rodzin..</h5>
                    </div>
                    <div className="section_second">
                        <p className="section_second_text">ubrania, meble, zabawki</p>
                    </div>
                </div>

                <div className="section">
                    <div className="section_first">
                        <h4 className="section_first_title">Fundacja “Bez domu”</h4>
                        <h5 className="section_first_purpose">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</h5>
                    </div>
                    <div className="section_second">
                        <p className="section_second_text">ubrania, jedzenie, ciepłe koce</p>
                    </div>
                </div>


                </>
                }
  
            </div>


        
                {active === 'SecondSection' && <p>Drugi  element</p>}
                {active === 'ThirdSection' && <p>Trzeci element</p>}
            
        </div>
        
    );
}

export default Foundations;