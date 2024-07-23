import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Presentation from '../pages/Presentation';
import Coordonnees from '../pages/Coordonnees';
import Modal from 'react-modal';

const SideMenu = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [sidePanelIsOpen, setSidePanelIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
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

                
                <li>
                   
                    <ul>
                        <div  className='Link'>
                        <li><Link to='/admin/user/presentation' onClick={openSidePanel}>Présentation</Link></li>
                    <li><Link to='/admin/user/parcour'>Mon parcour</Link></li>
                    <li><Link to='/admin/user/add'>Compétences</Link></li>
                    <li ><button onClick={openModal} className='modalButton' >
                                    Mes Coordonnées
                                </button></li>
                        </div>
                    
                    </ul>
                </li>
                
            </ul>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                className={'modalOpen'}
                overlayClassName="modalOverlay"
                
            >
                <button onClick={closeModal} className='modalClose'>✖</button>
                <Coordonnees />
            </Modal>

            <div className={`sidePanel ${sidePanelIsOpen ? 'sidePanelOpen' : ''}`}>
                <button onClick={closeSidePanel} className='sidePanelClose'>✖</button>
                <Presentation />
            </div>
        </div>
    );
};

export default SideMenu;