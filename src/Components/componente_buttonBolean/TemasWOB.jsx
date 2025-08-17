import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { useTheme } from '../../contexts/ThemeContext';

function TemasWOB() {
    const { isDarkMode, setTheme, currentTheme } = useTheme();

    const handleButtonClick = (buttonType) => {
        setTheme(buttonType);
    };

    return (
        <div className="temas-button">
            <div className={`sliding-background-theme ${currentTheme}`}></div>
            <button 
                className={`btn-white ${currentTheme === 'white' ? 'active' : ''}`}
                onClick={() => handleButtonClick('white')}
            >
                <FaSun />
            </button>
            <button 
                className={`btn-dark ${currentTheme === 'dark' ? 'active' : ''}`}
                onClick={() => handleButtonClick('dark')}
            >
                <FaMoon />
            </button>
        </div>
    );
}
export default TemasWOB;