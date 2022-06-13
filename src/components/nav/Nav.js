import React from 'react';
import './_nav.scss';
import image1 from '../../assets/Home-Hero-Image.jpg'
import image2 from '../../assets/Decoration.svg'


function Nav(props) {
    return (
        <div className="nav">
            <div className="left">
                <img className='left_image' src={image1} alt="przykładowe rzeczy" />
            </div>

            <div className="right">
                <div className="right_first-column">
                    <p className="right_first-column_text">Zaloguj</p>
                    <p className="right_first-column_text-second">Załóż konto</p>
                </div>

                <div className="right_second-column">
                    <p className="right_second-column_text">Start</p>
                    <p className="right_second-column_text">O co chodzi?</p>
                    <p className="right_second-column_text">O nas</p>
                    <p className="right_second-column_text">Fundacja i organizacje</p>
                    <p className="right_second-column_text">Kontakt</p>
                </div>

                <div className="right_third-column">
                    <h1 className="right_third-column_text">Zacznij pomogać!</h1>
                    <h2 className="right_third-column_text">Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <img className='right_third-column_img' src= {image2} alt="obrazek dekoracyjny" />
                </div>

                <div className="right_fourth-column">
                    <div className="right_fourth-column-first">
                        <h2 className="right_fourth-column-first_text">Oddaj</h2>
                        <h2 className="right_fourth-column-first_text">rzeczy</h2>
                    </div>
                    <div className="right_fourth-column-second">
                        <h2 className="right_fourth-column-second_text">Zorganizuj</h2>
                        <h2 className="right_fourth-column-second_text">zbiórkę</h2>
                    </div>
                </div>


                

            </div>

        </div>

    );
}

export default Nav;