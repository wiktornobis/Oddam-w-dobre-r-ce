import React from 'react';
import './_threeColumns.scss';
import background from '../../assets/ThreeColumns.png';

function ThreeColumns(props) {
    return (
        <>
        <img className='image' src= {background} alt="" 
        />
        <div className="columns">
            
            <div className="columns_first">
                <h3 className="columns_first_number">10</h3>
                <h4 className="columns_first_name">oddanych worków</h4>
                <p className="columns_first_text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>

            <div className="columns_second">
                <h3 className="columns_second_number">5</h3>
                <h4 className="columns_second_name">wspartych organizacji</h4>
                <p className="columns_second_text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>

            <div className="columns_third">
                <h3 className="columns_third_number">7</h3>
                <h4 className="columns_third_name">zorganizowanych zbiórek</h4>
                <p className="columns_third_text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
            </div>
        </div>
        </>
    );
}

export default ThreeColumns;