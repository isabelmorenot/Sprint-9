import React from "react";
import colorpop from "../../assets/Logo/colorpop.jpg"
import { Container } from "./homeStyles";
import { Link } from "react-router-dom";
import { Footer } from "../../components/footer/footer";

const Home = () =>{
    return(
    <div>
        <Container>
        <Link to='/skin/'><h1>Get Ready</h1></Link>
            <p>WELCOME TO COSMETICSTORE! <br></br><br></br>
            WE SHIP TO SPAIN<br></br>
            ALL DUTIES AND TAXES ALREADY INCLUDED - NO ADDITIONAL FEES AT CHECKOUT</p>
            <img src={colorpop} alt="colorpop"/>
        </Container>
        <Footer/>
    </div>

    )
}

export default Home;