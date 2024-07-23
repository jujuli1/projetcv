import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Presentation from '../pages/Presentation';
import Coordonnees from '../pages/Coordonnees';
import Competences from '../pages/Competences';
import Modal from 'react-modal';

const SideMenu = () => {
    const [coordonneesModalIsOpen, setCoordonneesModalIsOpen] = useState(false);
    const [competencesModalIsOpen, setCompetencesModalIsOpen] = useState(false);
    const [sidePanelIsOpen, setSidePanelIsOpen] = useState(false);

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
                    <li><Link to='/admin/user/presentation' onClick={openSidePanel}>Présentation</Link></li>
                    <li><Link to='/admin/user/parcour'>Mon parcours</Link></li>
                    <li><Link to='/admin/user/add' onClick={openCompetencesModal}>Compétences</Link></li>
                    <li><button onClick={openCoordonneesModal} className='modalButton'>Mes Coordonnées</button></li>
                </div>
            </ul>

            <Modal
                isOpen={coordonneesModalIsOpen}
                onRequestClose={closeCoordonneesModal}
                ariaHideApp={false}
                className={'modalOpen'}
                overlayClassName="modalOverlay"
            >
                <button onClick={closeCoordonneesModal} className='modalClose'>✖</button>
                <Coordonnees />
            </Modal>

            <Modal
                isOpen={competencesModalIsOpen}
                onRequestClose={closeCompetencesModal}
                ariaHideApp={false}
                className={'modalOpen'}
                overlayClassName="modalOverlay"
            >
                <button onClick={closeCompetencesModal} className='modalClose'>✖</button>
                <Competences />
            </Modal>

            <div className={`sidePanel ${sidePanelIsOpen ? 'sidePanelOpen' : ''}`}>
                <button onClick={closeSidePanel} className='sidePanelClose'>✖</button>
                <Presentation />
            </div>
        </div>
    );
};

export default SideMenu;
