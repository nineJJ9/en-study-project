import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

import './App.css';
import './reset.module.css';

import InitialPage from './components/InitialPage/InitialPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import MainPage from './components/MainPage/MainPage';
import RolePage from './components/RolePage/RolePage';
import RolePrevPage from './components/RolePage/RolePrevPage/RolePrevPage';

function App() {
    return (
        <BrowserRouter>
            <AnimatePresence>
                <Routes>
                    <Route path="/" element={<InitialPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/main" element={<MainPage />} />
                    <Route path="/roleprev" element={<RolePrevPage />} />
                    <Route path="/role" element={<RolePage />} />
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
    );
}

export default App;
