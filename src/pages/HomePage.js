import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import '../css/home.css';

const HomePage =(props) =>{
    const settings = { 
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        fade: true,
        autoplay:true,
    };

    return ( 
    <div className="galeria"> 
    <Slider {...settings}>
    <img src="/imagen/img01.jpg" alt="imagen 01"/>
    <img src="/imagen/img02.jpg" alt="imagen 02"/>
    <img src="/imagen/img03.jpg" alt="imagen 03"/>
    <img src="/imagen/img04.jpg" alt="imagen 04"/>
    <img src="/imagen/img05.jpg" alt="imagen 05"/>
    </Slider>
    </div>
    )
}

export default HomePage;