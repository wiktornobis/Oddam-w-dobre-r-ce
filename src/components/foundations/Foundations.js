import { useEffect, useState } from "react";

import './_foundations.scss';
import img from '../../assets/Decoration.svg';

function Foundations() {
    const [active, setActive] = useState('FirstSection');
    

    useEffect(() => {
       console.log('Hello')
    }, [active])

    return (
        <div className="container">
            <div className="container_first">
                <h3 className="container_first_title">Komu pomagamy?</h3>
                <img src={img} alt="obrazek dekoracyjny" className="container_first_img" />
            </div>
            <div className="container_second">
                
                <h4 onClick={() => setActive('FirstSection')} className="container_second_text ">Fundacjom</h4>
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

                    {active === 'SecondSection' && 
                <>
                <div className="container_third_text">
                    <p className="container_third_text-first">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p> 
                </div>
                <div className="section">
                    <div className="section_first">
                        <h4 className="section_first_title">Organizacja “Lorem Ipsum 1”</h4>
                        <h5 className="section_first_purpose">Quis varius quam quisque id diam vel quam elementum pulvinar.</h5>
                    </div>
                    <div className="section_second">
                        <p className="section_second_text">Egestas, sed, tempus</p>
                    </div>
                </div>
                <div className="section">
                    <div className="section_first">
                        <h4 className="section_first_title">Organizacja “Lorem Ipsum 2”</h4>
                        <h5 className="section_first_purpose">Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</h5>
                    </div>
                    <div className="section_second">
                        <p className="section_second_text">Ut, aliquam, purus, sit, amet</p>
                    </div>
                </div>
                <div className="section">
                    <div className="section_first">
                        <h4 className="section_first_title">Organizacja “Lorem Ipsum 3”</h4>
                        <h5 className="section_first_purpose">Scelerisque in dictum non consectetur a erat nam.</h5>
                    </div>
                    <div className="section_second">
                        <p className="section_second_text">Mi, quis, hendrerit, dolor</p>
                    </div>
                </div>
                </> 
                    }

                    {active === 'ThirdSection' && 
                    
                    <>
                    <div className="container_third_text">
                        <p className="container_third_text-first">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p> 
                    </div>
                    <div className="section">
                        <div className="section_first">
                            <h4 className="section_first_title">Zbiórka “Lorem Ipsum 1”</h4>
                            <h5 className="section_first_purpose">Quis varius quam quisque id diam vel quam elementum pulvinar.</h5>
                        </div>
                        <div className="section_second">
                            <p className="section_second_text">Egestas, sed, tempus</p>
                        </div>
                    </div>
                    <div className="section">
                        <div className="section_first">
                            <h4 className="section_first_title">Zbiórka “Lorem Ipsum 2”</h4>
                            <h5 className="section_first_purpose">Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</h5>
                        </div>
                        <div className="section_second">
                            <p className="section_second_text">Ut, aliquam, purus, sit, amet</p>
                        </div>
                    </div>
                    <div className="section">
                        <div className="section_first">
                            <h4 className="section_first_title">Zbiórka “Lorem Ipsum 3”</h4>
                            <h5 className="section_first_purpose">Scelerisque in dictum non consectetur a erat nam.</h5>
                        </div>
                        <div className="section_second">
                            <p className="section_second_text">Mi, quis, hendrerit, dolor</p>
                        </div>
                    </div>
                    </>
                    }
                
            </div> 

            <div className="container_fourth">
                <p onClick={() => setActive('FirstSection')} className="container_fourth_number">1</p>
                <p onClick={() => setActive('SecondSection')} className="container_fourth_number">2</p>
                <p onClick={() => setActive('ThirdSection')} className="container_fourth_number">3</p>
            </div>
        </div>
        
    );
}

export default Foundations;