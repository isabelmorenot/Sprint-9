import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../pages/Header/header';
import Skin from '../components/Skin/skin';
import GetEyeLiner from '../components/Eyes/eyes';
import Bronzer from '../components/Bronzer/bronzer';
import EyesBrow from '../components/EyeBrow/eyeBrow';
import Lipstick from '../components/Lipstick/lipstick';
import Nails from '../components/Nail_polish/nailPolish';
import LogInPage from '../components/LogIn_SignUp/login';
import SignUpPage from '../components/LogIn_SignUp/signup';

const Router = () => (

    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Header/>} />;
            <Route path='/skin/' element={<Skin/>} />;
            <Route path='/eyes/' element={<GetEyeLiner/>} />;
            <Route path='/bronzer/' element={<Bronzer/>} />;
            <Route path='/eyeBrow/' element={<EyesBrow/>} />;
            <Route path='/lipstick/' element={<Lipstick/>} />;
            <Route path='/nailPolish/' element={<Nails/>} />;
            <Route path='/login/' element={<LogInPage/>} />;
            <Route path='/signup/' element={<SignUpPage/>} />;


            
        </Routes>
    </BrowserRouter>
);

export default Router;