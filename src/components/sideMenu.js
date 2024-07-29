import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Presentation from '../pages/Presentation';
import Coordonnees from '../pages/Coordonnees';
import Competences from '../pages/Competences';
import Modal from 'react-modal';

const SideMenu = () => {
    const [coordonneesModalIsOpen, setCoordonneesModalIsOpen] = useState(true);
    const [competencesModalIsOpen, setCompetencesModalIsOpen] = useState(false);
    const [mesCompetencesModalIsOpen, setMesCompetencesModalIsOpen] = useState(false);
    const [sidePanelIsOpen, setSidePanelIsOpen] = useState(false);


    {/** gestion modales coordonnées/ copétences/ presentation */}
    const openCoordonneesModal = () => {
        setCoordonneesModalIsOpen(true);
    };

    const closeCoordonneesModal = () => {
        setCoordonneesModalIsOpen(false);
    };

    const openCompetencesModal = () => {
        setCompetencesModalIsOpen(true);
        
    };

    const closeCompetencesModal = () => {
        setCompetencesModalIsOpen(false);
    };

    const openSidePanel = () => {
        setSidePanelIsOpen(true);
    };

    const closeSidePanel = () => {
        setSidePanelIsOpen(false);
    };

    return (
        <div className='sidemenu'>
            <ul>
                <div className='Link'>

                <li><Link to='/admin/user/presentation' onClick={openSidePanel}  className='presentation'>Présentation</Link></li>


                    <div className='pageJob'>
                        <a className='link' href='https://www.linkedin.com/in/julien-lefevre-6bab8255/' target='_blank' rel='noopener noreferrer'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' alt='LinkedIn' className='logolinkedin' />
                        Linkedin</a>
                    <a className='link' href='https://github.com/jujuli1/projetcv' target='_blank' rel='noopener noreferrer'>
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" className='logogit' alt="GitHub"  />
                        Github
                        </a>
                    
                    </div>
                   
                
                    <li><Link to='/admin/user/add' onClick={openCompetencesModal}>Compétences</Link></li>
                    
                </div>
            </ul>

            

            {/*modale coordonées */}
            <Modal
                isOpen={coordonneesModalIsOpen}
                
                ariaHideApp={false}
                className={'modalOpen'}
                overlayClassName="modalOverlay"
            >
                
                <Coordonnees />
            </Modal>


            {/**modale competence */}
            <Modal
                isOpen={competencesModalIsOpen}
                onRequestClose={closeCompetencesModal}
                ariaHideApp={false}
                className={'modalOpenComp'}
                overlayClassName="modalOverlayComp"
            >
                
                <Competences />
            </Modal>


            {/**bouton de fermeture page presentation */}
            <div className={`sidePanel ${sidePanelIsOpen ? 'sidePanelOpen' : ''}`}>
                <button onClick={closeSidePanel} className='sidePanelClose'>✖</button>
                <Presentation />
            </div>
        </div>
    );
};

export default SideMenu;
