import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
import SignUp from './pages/signUp.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signUp' element={<SignUp/>}/>
        </Routes>
    </BrowserRouter>
);

reportWebVitals();
