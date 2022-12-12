import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {ContainerHeader } from "./headerStyles";
import { DataContext } from "../../components/context/Dataprovider";

const Header = () => {

    const value = useContext(DataContext);
    const [menu,setMenu] = value.menu;
    const [carrito] = value.carrito;

    //console.log(menu)

    const toogleMenu = () =>{
        setMenu(!menu)
    }
    return(
    <ContainerHeader>
        <Link to="./"><h2>Cosmetic<span>Store</span></h2></Link>
            <div>
                <Link to='./'>Home</Link>
                <Link to='./eyeBrow/'>Palettes</Link>
                <Link to='./eyes/'>Eyes</Link>
                <Link to='./lipstick/'>Lips</Link>
                <Link to='./skin/'>Face</Link>
                <Link to='./bronzer/'>Bronzers</Link>
                <Link to='./nailPolish/'>Nails</Link>
            </div>
            <div className="logIn_SignUp">
                <Link to='./login/'>Log In</Link>
                <Link to='./signup/'>Sign Up</Link>
            </div>
            <div className="bag" onClick={toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item_total">{carrito.length}</span>
            </div>
    </ContainerHeader>
    )
};

export default Header;