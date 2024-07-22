import React, { useEffect, useState } from 'react';


const Presentation = () => {


    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
        }, 0); // Permet de forcer le re-rendu avant d'ajouter la classe

        return () => clearTimeout(timeoutId); // Nettoyage si le composant se démonte
    }, []);
    return (
        <div className='presentation'>
            <div className='user'>



            
             <div className='qui-container'>

            
            
            <h1 className={`qui-container ${isVisible ? 'fade-in-qui' : 'hidden'}`}>Madame, Monsieur</h1>
            <div className="dots-container">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            
            </div>
            <div className={`qui-container ${isVisible ? 'fade-in-qui2' : 'hidden'}`}>
            
            <div className='paragraphequi'>
                <p >Actuellement en reconversion professionnel dans les métiers du numérique, et ayant effectué plusieurs formations dans le developpement web avec comme derniere en date, une formation de 6 mois avec l'école O'clock, je suis actuellement à la recherche d'une premiere experience professionnel, d'une formation en alternance ou d'un stage dans ce domaine</p>
            <p >Je suis motivé par la volonté d'effectué un metier dans un domaine que j'affectionne et que je pratique depuis longtemps en tant qu'amateur, l'informatique et les métier du numérique en général</p>
            <p >Je maitrise diverses compétences que je liste dans la partie "compétence" de cette petite application de présentation, spécialisé dans le domaine du developpement d'applications web et web mobile, je désir par la suite, aquérir également des connaissances dans bien d'autres domaines comme la cybersécurité entre autres</p>       
            
            <p> Je vous remercie de l'attention porté à ma réalisation, et, dans l'attente d'une réponse de votre part, je vous adresse mes sincères salutations .</p>
            <p>LEFEVRE Julien</p>

            <div className='signature'> 
           

            <svg className='jl' viewBox="0 0 1042 559" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1042" height="559" fill="white"/>
<path id='sign' d="M85 2C104.784 47.8619 121.315 96.044 134.667 144.111C145.507 183.135 152.204 215.145 156.889 255C161.369 293.115 161.764 331.946 162.389 370.278C162.961 405.374 164.195 441.129 151.167 474.444C146.953 485.221 142.338 494.067 134 501.944C123.905 511.482 111.316 505.686 100.333 500.333C67.1261 484.149 33.0178 459.817 14.6667 426.889C-3.09601 395.017 -0.900755 355.583 15.1667 323.667C27.3912 299.384 49.3509 285.429 72.0555 271.944C87.3131 262.883 101.463 255.111 117.444 247.444C138.729 237.234 161.34 230.066 182.556 219.778C215.896 203.61 241.892 180.065 261.667 148.667C280.233 119.187 291.461 85.8315 299.5 52.1667C300.949 46.101 301.628 39.2691 303.5 33.2778C304.354 30.5445 303.081 38.9922 302.722 41.8333C296.422 91.7867 290.527 141.684 286.444 191.889C279.351 279.112 276.558 366.484 266.222 453.444C244.505 636.165 272.673 391.625 255.444 531.889C254.708 537.885 253.728 543.906 253.889 549.944C254.254 563.643 261.483 554.385 269.278 548.389C285.862 535.632 336.959 491.212 346.056 483.333C370.508 462.155 438.542 402.466 463.222 381.833C510.794 342.065 559.274 306.073 614 277" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path id='sign'  d="M1033 173C1033.45 206.48 1036.3 239.74 1040 273" stroke="white" stroke-width="3" stroke-linecap="round"/>
<path id='sign'  d="M311 465C323.819 465 335.833 457.883 337.722 444.278C338.107 441.508 339.019 436.346 335.444 435.222C334.474 434.917 331.027 434.456 330.222 435.222C322.915 442.181 311.737 463.388 325.722 469.667C334.445 473.583 347.528 470.188 355 465.444C368.265 457.023 377.776 443.811 385.111 430.222C390.527 420.188 391.875 411.478 395 401" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path id='sign'  d="M408 442C395.303 427.622 383.499 413.941 375.111 396.444C370.367 386.548 364.251 370.646 360.778 360.111C360.687 359.837 355.654 344.155 356.333 340.778C358.077 332.107 384.56 333.151 390.333 332.667C394.197 332.343 398.112 332 402 332" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path id='sign'  d="M397 395C405.151 390.702 422.897 387.425 424.333 376.222C425.441 367.586 400.962 372.99 397.333 375.111C391.716 378.394 389.846 386.048 391.778 392C394.939 401.742 406.06 405.752 415.222 407.111C438.323 410.539 441.775 391.43 448 374" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path id='sign'  d="M448 365C456.591 366.895 465.147 368.926 473.722 370.889C477.53 371.761 493.646 378.308 494.889 371.111C497.121 358.187 494.791 343.149 494 330.222C493.506 322.141 492.926 314.706 491 307" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path id='sign'  d="M522 351C518.239 345.567 514.808 339.881 511.5 334.167C507.816 327.804 500.697 318.348 503.889 310.222C509.293 296.466 525.868 285.829 537 277" stroke="black" stroke-width="3" stroke-linecap="round"/>
<path id='sign'  d="M551 299C566.754 295.116 586.199 292.717 596.611 278.389C600.398 273.179 602.364 263.136 596.889 258C589.992 251.53 555.478 264.147 558.5 274.389C560.487 281.122 579.582 285.298 583.444 286.333C604.725 292.039 627.617 296.002 649.556 291.5C673.028 286.683 685.179 265.266 708 260" stroke="black" stroke-width="3" stroke-linecap="round"/>
</svg>
       </div>
            

            </div>


            
            

            
            
            </div>
            
        </div>
            
        </div>
        </div>
    );
};

export default Presentation;