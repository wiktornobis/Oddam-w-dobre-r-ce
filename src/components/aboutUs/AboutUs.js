import './_aboutUs.scss';
import img from '../../assets/Decoration.svg';
import img2 from '../../assets/Signature.svg';
import img3 from '../../assets/People.jpg';

function AboutUs() {
    return (
        <div id='o-nas' className="about">
            <div className="about_first">
                <h3 className="about_first_us">O nas</h3>
                <img src={img} alt="obrazek dekoracyjny" className="about_first_img" />
                <p className="about_first_text">Nori grape silver beet broccoli kombu beet 
                                                greens fava bean potato quandong celery. Bunya nuts 
                                                black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                </p>
                <img src={img2} alt="podpis" className="about_first_img-second" />
            </div>
            <div className="about_second">
                <img src={img3} alt="grupa ludzi patrząca w dół" className="about_second_img" />
            </div>
        </div>
    );
}

export default AboutUs;