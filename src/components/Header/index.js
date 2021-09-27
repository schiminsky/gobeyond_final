import React from "react";
import Menu from "../Menu";
import Logo from "../Logo";
import style from "./style.css";
import mainLogo from '../../assets/images/logo-corebiz-global.png';

function Header (){
    return(
       <div className="header">
           <Logo source={mainLogo}/>
           <Menu/>
       </div>
    )
}
export default Header