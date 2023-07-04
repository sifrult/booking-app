import React from 'react';
import './styles/App.css';
import Home from './pages//homePage'
import Login from './pages/loginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                <Route
                    path='login'
                    element={<Login />}
                />
            </Routes>
        </Router>
    );

}
