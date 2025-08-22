import { CiUser } from "react-icons/ci";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";

function Home() {
    return (
        <div className="home-container">
            <h1>Bienvenidos a GrupoFreelancer</h1>
            <p>En GrupoFreelancer transformamos ideas en soluciones digitales innovadoras. Somos un equipo
                 multidisciplinario de profesionales especializados en desarrollo web, diseño, marketing 
                 digital y soluciones tecnológicas a medida, comprometidos en brindar un servicio de alta
                  calidad que impulse el crecimiento de tu negocio.<br/><br/>

                Nuestra misión es acompañar a emprendedores, empresas y organizaciones en su proceso de 
                transformación digital, ofreciendo proyectos creativos, escalables y funcionales.
                Confiar en nosotros significa contar con un grupo de expertos que trabajan con pasión, 
                responsabilidad y enfoque en resultados.</p><br />

            <h2>Nuestro equipo</h2>
            <p>En GrupoFreelancer reunimos talento diverso y complementario. Cada integrante aporta su
                experiencia y pasión, logrando proyectos completos y de alto impacto.</p>

                <div className="cardRol">
                    <div className="cardItem">
                        <h3>Frontend Developer</h3>
                        <li>Carlos</li>
                        <CiUser className="user-icon" />
                        <p>Especialista en crear interfaces atractivas, dinámicas y responsivas que 
                            brindan una experiencia de usuario única.</p>
                            <p>Lenguajes y tecnologías dominados:</p>
                            <ul>
                                <li><FaHtml5 /></li>
                                <li><FaCss3Alt /></li>
                                <li><FaJsSquare /></li>
                            </ul>
                    </div>
                    <div className="cardItem">
                        <h3>Backend Developer</h3>
                        <li>Juan</li>
                        <CiUser className="user-icon" />
                        <p>Encargado de la lógica del servidor, bases de datos y la integración de sistemas.</p>
                        <p>Lenguajes y tecnologías dominados:</p>
                    </div>
                    <div className="cardItem">
                        <h3>UI/UX Designer</h3>
                        <li>Maria</li>
                        <CiUser className="user-icon" />
                        <p>Diseñadora de interfaces y experiencias de usuario que cautivan y retienen a los visitantes.</p>
                        <p>Lenguajes y tecnologías dominados:</p>
                    </div>
                    <div className="cardItem">
                        <h3>Data & Cloud Specialist</h3>
                        <li>Pedro</li>
                        <CiUser className="user-icon" />
                        <p>Experto en bases de datos, integración en la nube y optimización de rendimiento.</p>
                        <p>Lenguajes y tecnologías dominados:</p>
                    </div>
                </div>
        </div>
    );
}
export default Home;