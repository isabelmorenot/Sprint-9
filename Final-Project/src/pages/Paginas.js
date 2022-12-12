import React from "react";
import {Routes, Route} from "react-router-dom";
import Skin from '../components/skin/skin';
import GetEyeLiner from '../components/eyes/eyes';
import Bronzer from '../components/bronzer/bronzer';
import EyesBrow from '../components/eyeBrow/eyeBrow';
import Lipstick from '../components/lipstick/lipstick';
import Nails from '../components/nail_polish/nailPolish';
import LogInPage from '../components/logIn_SignUp/login';
import SignUpPage from '../components/logIn_SignUp/signup';
import Fichas from '../components/singleMakeUp/fichaMakeUp';
import Home from "./home/home";

export const Paginas = () => {
    return(
        <section>
            <Routes>
            <Route path='/home/' element={<Home/>} />;    
            <Route path='/skin/' element={<Skin/>} />;
            <Route path='/eyes/' element={<GetEyeLiner/>} />;
            <Route path='/bronzer/' element={<Bronzer/>} />;
            <Route path='/eyeBrow/' element={<EyesBrow/>} />;
            <Route path='/lipstick/' element={<Lipstick/>} />;
            <Route path='/nailPolish/' element={<Nails/>} />;
            <Route path='/fichaMakeUp/:id' element={<Fichas/>} />;
            <Route path='/login/' element={<LogInPage/>} />;
            <Route path='/signup/' element={<SignUpPage/>} />;
            </Routes>

        </section>
    )
}