import { FaCheckCircle } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import IdiomasButton from "../componente_buttonBolean/IdiomasButton";
import TemasWOB from "../componente_buttonBolean/TemasWOB";

function Card_comp() {

    return (
        <div className="tarjeta">
            <FaUserCircle className="tarjeta-img" />
            <h2>FreelancerGroup <FaCheckCircle /></h2>
            <a href="#">@FreelancerGroup</a>
            <div className="btnBolean">
                <IdiomasButton />
                <TemasWOB />
            </div>
        </div>

    );
}
// function Tarjeta2() {
//     return (
//         <div className="tarjeta">
//             <img src="/img/perfil.png" className="tarjeta-img" />
//             <h2>Romel Denis AQ </h2>
//             <p>Aprendiz de todo, maestro de nada</p>
//         </div>
//     );

// }

export default Card_comp;

/*const card_comp = ()=>{
    return(
        <div>carlos adrian HM<div>
    );
}

const App=()=>{

    return(
        <div><card_comp></card_comp></div>
    );
}

export default App;
*/