import { useState } from 'react';

function IdiomasButton() {
    const [activeButton, setActiveButton] = useState('esp'); // Por defecto español activo

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType);
    };

    return (
        <div className="idiomas-button">
            <div className={`sliding-background ${activeButton}`}></div>
            <button 
                className={`btn-esp ${activeButton === 'esp' ? 'active' : ''}`}
                onClick={() => handleButtonClick('esp')}
            >
                ESP
            </button>
            <button 
                className={`btn-eng ${activeButton === 'eng' ? 'active' : ''}`}
                onClick={() => handleButtonClick('eng')}
            >
                ENG
            </button>
        </div>
    );
}

export default IdiomasButton;
