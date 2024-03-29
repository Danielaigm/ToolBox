import { useState } from 'react';
import './style.css'
const Modal8 = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    
    return (
        <div className="div8">
       
                <span onClick={openModal}  className="div8container__text">
                    Central America
                </span>
            
            {modalOpen && (
            <div className="modalT-container overlay">
                <div className="modalT-content">
                
                <button className="close-buttonT" onClick={closeModal}>
                    X
                </button>
                <p className="title-modal">Central America</p>  
                <img className='imgModalT' src="./webs/modal8.PNG" alt="" />
                <button className="url-buttonT">
                    <a href="https://aclimatar.org/" target="blank"> 
                    
                        GO THERE
                        
                    </a>
                </button>
                </div>
            </div>
            )}
    </div>
    
    );
};

export default Modal8;