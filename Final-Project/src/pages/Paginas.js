import React from "react";
import { createContext, useEffect, useState } from "react";
import { isUserConnected } from "../components/firebase/fbfunctions";
import ProtectedRoutes from "../components/routes/protectedRoutes";
import {Routes, Route} from "react-router-dom";
import Skin from '../components/skin/skin';
import GetEyeLiner from '../components/eyes/eyes';
import Bronzer from '../components/bronzer/bronzer';
import EyesBrow from '../components/eyeBrow/eyeBrow';
import Lipstick from '../components/lipstick/lipstick';
import Nails from '../components/nail_polish/nailPolish';
import Fichas from '../components/singleMakeUp/fichaMakeUp';
import Home from "./home/home";
import LogIn from "../components/userexample/login";
import SignUp from "../components/userexample/signup";

export const UserAuthContext = createContext();

export const Paginas = () => {
    const [user, setUser] = useState(undefined);
  
    useEffect(() => {
      isUserConnected(setUser);
    }, []);
  
    return(
        <UserAuthContext.Provider value={{ user }}>
        <section>
            <Routes>
            <Route path='/home/' element={<Home/>} />;    
            <Route path='/skin/'  element={<ProtectedRoutes><Skin/></ProtectedRoutes>}/>;
            <Route path='/eyes/' element={<GetEyeLiner/>} />;
            <Route path='/bronzer/' element={<Bronzer/>} />;
            <Route path='/eyeBrow/' element={<EyesBrow/>} />;
            <Route path='/lipstick/' element={<Lipstick/>} />;
            <Route path='/nailPolish/' element={<Nails/>} />;
            <Route path='/fichaMakeUp/:id' element={<Fichas/>} />;
            <Route path='/login/' element={<LogIn/>} />;
            <Route path='/signup/' element={<SignUp/>} />;
            </Routes>
        </section>
        </UserAuthContext.Provider>
    )
}