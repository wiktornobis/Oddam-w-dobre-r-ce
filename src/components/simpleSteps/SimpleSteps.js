import React from 'react';
import './_simpleSteps.scss';

import img1 from '../../assets/Decoration.svg';
import img2 from '../../assets/Icon-1.svg';
import img3 from '../../assets/Icon-2.svg';
import img4 from '../../assets/Icon-3.svg';
import img5 from '../../assets/Icon-4.svg';

function SimpleSteps() {
    return (
        <div className="step">
            <div className="step_first">
                <h3 className="step_first_text">Wystarczą 4 proste kroki</h3>
                <img className="step_first_img" src={img1} alt="obrazek dekoracyjny" />
            </div>

            <div className="column">
                <div className="column_first">
                    <img className="column_first_img" src={img2} alt="koszulka" />
                    <h4 className="column_first_title">Wybierz rzeczy</h4>
                    <p className="column_first_text">ubrania, zabawki, sprzęt i inne</p>
                </div>

                <div className="column_second">
                    <img className="column_second_img" src={img3} alt="paczka" />
                    <h4 className="column_second_title">Spakuj je</h4>
                    <p className="column_second_text">skorzystaj z</p>
                    <p className="column_second_text">worków na śmieci</p>
                </div>

                <div className="column_third">
                    <img className="column_third_img" src={img4} alt="lupa" />
                    <h4 className="column_third_title">Zdecyduj komu chcesz pomóc</h4>
                    <p className="column_third_text">wybierz zaufane miejsce</p>
                </div>

                <div className="column_fourth">
                    <img className="column_fourth_img" src={img5} alt="znaczek zamówienia" />
                    <h4 className="column_fourth_title">Zamów kuriera</h4>
                    <p className="column_fourth_text">kurier przyjedzie </p>
                    <p className="column_fourth_text">w dogodnym terminie</p>
                </div>
            </div>

            <div className="step_second">
                <h2 className="step_second_title">oddaj rzeczy</h2>
            </div>
        </div>
    );
}

export default SimpleSteps;