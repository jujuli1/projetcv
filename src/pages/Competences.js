import React, { useEffect, useRef, useState } from 'react';
import TP from '../images/tp.jpg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 



const Competences = () => {

    const containerRef = useRef(null);
    const [position, setPosition] = useState(0);

    //photo carousel
    const images = [
        TP,
        'https://clarity-prod-s3.s3.us-east-2.amazonaws.com/wp-content/uploads/2023/05/12164244/React.png',
        'https://venpep.com/themes/images/technology/img23.png',
        'https://thesafety.us/images/articles/javascript-logo.png',
        'https://www.foodpal-app.com/uploads/images/food/31769/espresso-6053151e35820-400.webp',
        'https://www.i-pulse.nl/Content/images/logos/html5css3.png',
        

        

    ];
    useEffect(() => {
        if (containerRef.current) {
            // margeur carousel
            containerRef.current.style.width = `${800 * images.length}px`;

            // Ajout photo
            images.forEach((url, index) => {
                const div = document.createElement('div');
                div.className = 'photo';
                div.style.backgroundImage = `url('${url}')`;
                div.style.width = '800px'; 
                div.style.height = '400px'; 
                div.style.backgroundSize = 'cover'; 
                div.style.backgroundPosition = 'center'; 
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

             {/**Images partie responsive */}
            <img className='imgResponsive' src={TP}/>
            <img className='imgResponsive' src='https://clarity-prod-s3.s3.us-east-2.amazonaws.com/wp-content/uploads/2023/05/12164244/React.png'/>
            <img className='imgResponsive' src='https://venpep.com/themes/images/technology/img23.png'/>
            <img className='imgResponsive' src='https://thesafety.us/images/articles/javascript-logo.png'/>
            <img className='imgResponsive' src='https://www.i-pulse.nl/Content/images/logos/html5css3.png'/>
            <img className='imgResponsive' src='https://www.foodpal-app.com/uploads/images/food/31769/espresso-6053151e35820-400.webp'/>

                <div id='carousel'>
                    <div id='container' ref={containerRef}>

                    </div>
                    <FaArrowLeft className='bouton' id='g' onClick={handleLeftClick} />
                    <FaArrowRight className='bouton' id='d' onClick={handleRightClick} />
                </div>


            </div>
        </div>
    );
};

export default Competences;