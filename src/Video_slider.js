import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import './Estilos/slider-container-video.css';
import { motion } from 'framer-motion';

const VideoSlider = ({ videos }) => {
    const [videoIndex, setVideoIndex] = useState(0);

    const opts = {
        height: '200',
        width: '300',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <motion.div className='slider-container-video'>
            <motion.div className='slider-video' drag='x' dragConstraints={{ right: 0 }}>
                {videos.map((video, index) => (
                    <motion.div className='item-video' key={index}>
                        <YouTube videoId={video} opts={opts} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default VideoSlider;