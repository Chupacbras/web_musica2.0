import React from "react";
import './Estilos/Home.css';

function Home() {
    return (
        <div className="Cover">
            <video className="video-background" autoPlay muted loop playsInline
                src="/fotos/Vid1.mp4">
            </video>
            <h className='First_sentence_block'>
                <p className="First_sentence">
                    "Music is like people:
                    Everybody<br /> has a tone and all of them are unique"
                </p>
            </h>
        </div>
    );
}

export default Home;
