import React from 'react';
import './styles/App.css';
import Home from './pages//homePage'
import Login from './pages/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Register from './pages/register';
import axios from 'axios';

axios.defaults.baseURL='http://localhost:4000';
axios.defaults.withCredentials = true;

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                </Route>
            </Routes>
        </Router>
    );

}
