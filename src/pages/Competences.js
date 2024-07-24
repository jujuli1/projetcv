import React, { useEffect, useRef, useState } from 'react';
import TP from '../images/tp.jpg'

const Competences = () => {

    const containerRef = useRef(null);
    const [position, setPosition] = useState(0);

    // tableau de photo carousel
    const images = [
        TP,
        'https://t4.ftcdn.net/jpg/07/11/37/69/360_F_711376939_orcZfQJbdroADKf2swzUyokKWc0vBsKP.jpg',
    ];
    useEffect(() => {
        if (containerRef.current) {
            // Définir la largeur du conteneur
            containerRef.current.style.width = `${800 * images.length}px`;

            // Ajouter les photos au conteneur
            images.forEach((url, index) => {
                const div = document.createElement('div');
                div.className = 'photo';
                div.style.backgroundImage = `url('${url}')`;
                containerRef.current.appendChild(div);
            });
        }
    }, [images]);

    const handleLeftClick = () => {
        setPosition((prev) => Math.max(prev - 1, 0));
    };

    const handleRightClick = () => {
        setPosition((prev) => Math.min(prev + 1, images.length - 1));
    };

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.style.transform = `translateX(${-position * 800}px)`;
            containerRef.current.style.transition = "all 0.5s ease";
        }
    }, [position]);

    

    return (
        <div>
            <div className='modalComp'>

                <div id='carousel'>
                    <div id='container' ref={containerRef}>

                    </div>
                    <img src='https://t4.ftcdn.net/jpg/07/11/37/69/360_F_711376939_orcZfQJbdroADKf2swzUyokKWc0vBsKP.jpg' className='bouton' id='d' onClick={handleRightClick}/>
                    <img src='https://t4.ftcdn.net/jpg/07/11/37/69/360_F_711376939_orcZfQJbdroADKf2swzUyokKWc0vBsKP.jpg' className='bouton' id='g' onClick={handleLeftClick}/>

                </div>


            </div>
        </div>
    );
};

export default Competences;