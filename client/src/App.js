import React from 'react';
import './styles/App.css';
import Home from './pages//homePage'
import Login from './pages/login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Register from './pages/register';
import Profile from './pages/profile';
import axios from 'axios';
import { UserContextProvider } from './components/userContext';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

export default function App() {
    return (
        <UserContextProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='login' element={<Login />} />
                        <Route path='register' element={<Register />} />
                        <Route path='profile' element={<Profile />} />
                    </Route>
                </Routes>
            </Router>
        </UserContextProvider>
    );

}
