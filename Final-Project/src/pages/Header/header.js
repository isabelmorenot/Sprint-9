import React from "react";
import {ContainerHeader } from "./headerStyles";


const Header = () => (
    <ContainerHeader>
        <h2>Cosmetic<span>Store</span></h2>
            <div>
                <a href='./'>Home</a>
                <a href='./eyeBrow/'>Palettes</a>
                <a href='./eyes/'>Eyes</a>
                <a href='./lipstick/'>Lips</a>
                <a href='./skin/'>Face</a>
                <a href='./bronzer/'>Bronzers</a>
                <a href='./nailPolish/'>Nails</a>
            </div>
            <div className="logIn_SignUp">
                <a href='./login/'>Log In</a>
                <a href='./signup/'>Sign Up</a>
            </div>

    </ContainerHeader>
);

export default Header;