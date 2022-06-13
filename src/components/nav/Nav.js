import React from 'react';
import './_nav.scss';
import image1 from '../../assets/Home-Hero-Image.jpg'
import image2 from '../../assets/Icon-2.svg'


function Nav(props) {
    return (
        <div className="nav">
            <div className="left">
                <img className='left_image' src={image1} alt="przykładowe rzeczy" />
            </div>

            <div className="right">
                <div className="right_first-column">
                    <p className="right_first-column_text">Zaloguj</p>
                    <p className="right_first-column_text">Załóż konto</p>
                </div>

                <div className="right_second-column">
                    <p className="right_first-column_text">Start</p>
                    <p className="right_first-column_text">O co chodzi</p>
                    <p className="right_first-column_text">O nas</p>
                    <p className="right_first-column_text">Fundacja i organizacje</p>
                    <p className="right_first-column_text">Kontakt</p>
                </div>
                <div className="right_second-column">
                    <h1 className="right_first-column_main-text">Zacznij pomogać! Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src= {image2} alt="" />

                </div>


                

            </div>

        </div>

    );
}

export default Nav;