import React from "react"
import Logo from "../Logo"
import Styles from "./style.css"
import FooterLogo from "../../assets/images/logo-corebiz-global-preto.png"
import Facebook from "../../assets/images/Icon-awesome-facebook-f.png"
import Instagram from "../../assets/images/Icon-awesome-instagram.png"
import Linkedin from "../../assets/images/Icon-awesome-linkedin-in.png"
import Paragraph from "../Paragraph"
import Menu from "../Menu"

function Footer() {
    return (
        <footer className="footer">
            <div className="first-col">
                <div className="col-logo">
                    <Logo source={FooterLogo}/>
                    <Paragraph text={"direitos reservados, corebiz 2021"}/>
                    <ul className="socialMedia">
                        <li className="item"><a href=""><img src={Facebook} alt="" /></a></li>
                        <li className="item"><a href=""><img src={Instagram} alt="" /></a></li>
                        <li className="item"><a href=""><img src={Linkedin} alt="" /></a></li>
                    </ul>
                </div>
                <div className="col-menu">
                    <Menu/>
                </div>
            </div>
            <div className="second-col">
                <ul className="countries">
                    <li className="item">
                        <h2>.Brasil</h2>
                        <p>Avenida Andromeda, 2000.<br/>
                        Bloco 6 e 8 ALphaville SP</p>
                        <p>R. Ifigenia Maria de Oliveira, 3793<br/>
                        Jr. Piratininga Franca SP</p>
                    </li>
                    <li className="item">
                        <h2>.Argentina</h2>
                        <p>Soler 5518, 3 Piso<br/>
                        C1425BYF<br/>
                        Palermo Hollywood<br/>
                        CABA</p>
                    </li>
                    <li className="item">
                        <h2>.México</h2>
                        <p>Blvd. Miguel de Cervantes Saavedra 169,<br/>
                        Granada, Miguel Hidalgo, 11520<br/>
                        Ciudad de México, CDMX</p>
                    </li>
                    <li className="item">
                        <h2>.Chile</h2>
                        <p>Roberto del Rio 1137,<br/>
                        Providencia.
                        </p>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer