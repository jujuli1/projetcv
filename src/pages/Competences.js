import React, { useEffect, useRef, useState } from 'react';
import TP from '../images/tp.jpg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 



const Competences = () => {

    const containerRef = useRef(null);
    const [position, setPosition] = useState(0);
    const [expandedImage, setExpandedImage] = useState(null);

    //photo carousel
    const images = [
        TP,
        'https://clarity-prod-s3.s3.us-east-2.amazonaws.com/wp-content/uploads/2023/05/12164244/React.png',
        'https://venpep.com/themes/images/technology/img23.png',
        'https://thesafety.us/images/articles/javascript-logo.png',
        'https://www.foodpal-app.com/uploads/images/food/31769/espresso-6053151e35820-400.webp',
        
        

        

    ];
    useEffect(() => {
        if (containerRef.current) {
            // largeur carousel
            containerRef.current.style.width = `${1600 * images.length}px`;

            // Ajout photo
            images.forEach((url, index) => {
                const div = document.createElement('div');
                div.className = 'photo';
                div.style.backgroundImage = `url('${url}')`;
                div.style.width = '1600px'; 
                div.style.height = '800px'; 
                div.style.backgroundSize = 'cover'; 
                div.style.backgroundPosition = 'center'; 
                containerRef.current.appendChild(div);
            });

            
        }
    }, [images]);

    {/** fleche directionel carousel */}
    const handleLeftClick = () => {
        setPosition((prev) => Math.max(prev - 1, 0));
    };

    const handleRightClick = () => {
        setPosition((prev) => Math.min(prev + 1, images.length - 1));
    };

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.style.transform = `translateX(${-position * 1600}px)`;
            containerRef.current.style.transition = "all 0.5s ease";
        }
    }, [position]);


    {/** zoom/close image carouselle en responsive */}
    const handleImageClick = (image) => {
        setExpandedImage(image);
    };

    const handleCloseImage = () => {
        setExpandedImage(null);
    };

    

    return (
        <div>
            <div className='modalComp'>

             {/** Images partie responsive */}
             <div className="responsive-images">
                    {images.map((image, index) => (
                        <img key={index} className='imgResponsive' src={image} alt={`competence ${index}`} onClick={() => handleImageClick(image)} />
                    ))}
                </div>


                {/** carousel */}
                <div id='carousel'>
                    <div id='container' ref={containerRef}>

                    </div>
                    <FaArrowLeft className='bouton' id='g' onClick={handleRightClick} />
                    <FaArrowRight className='bouton' id='d' onClick={handleLeftClick} />
                </div>

                {/** zoom image responsive */}
                {expandedImage && (
                <div className="overlay">
                    <div className="expanded-image-container">
                        <img src={expandedImage} alt="Expanded" className="expanded-image" />
                        <button className="close-button" onClick={handleCloseImage}>X</button>
                    </div>
                </div>
            )}

            </div>
        </div>
    );
};

export default Competences;