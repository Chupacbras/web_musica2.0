import React from "react";
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";
import './Estilos/Media.css';

function Carousel({ images }) {

    const flickityOptions = {
        initialIndex: 3,
        wrapAround: true,
        selectedAttraction: 0.01,
        autoPlay: true,
        prevNextButtons: true,
        pageDots: false,
        pauseAutoPlayOnHover: false,
        arrowShape: {
            x0: 30,
            x1: 65, y1: 35,
            x2: 65, y2: 35,
            x3: 55
        }


    }
    return (
        <div className="fotos-container">
            <h1 className='Title-media'>LIVE MEDIA</h1>
            <div className="carousel-container">
                <Flickity
                    className={'fotos'}
                    options={flickityOptions}
                >
                    {images.map((image, index) => (
                        <img src={image} alt="" />
                    ))}
                </Flickity>
            </div>
        </div>
    );
}

export default Carousel;