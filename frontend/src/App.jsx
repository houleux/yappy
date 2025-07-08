import React, {useEffect} from 'react'
import Navbar from "daisyui/components/navbar/index.js";
import {Navigate, Route, Routes} from "react-router-dom";

import {Loader} from 'lucide-react'
import {Toaster} from "react-hot-toast";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import SettingsPage from "./pages/SettingsPage.jsx";
import ProfilePage from "./pages/ProfilePage";

import NavBar from "./components/NavBar";
import {axiosInstance} from "./lib/axios.js";
import {useAuthStore} from "./store/useAuthStore.js";

const App = () => {
    const {authUser, checkAuth, isCheckingAuth, onlineUsers} = useAuthStore();

    console.log({onlineUsers});

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    console.log({authUser});

    if (isCheckingAuth && !checkAuth) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader className='size-10 animate-spin' />
            </div>
        )
    }
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={authUser ? <HomePage /> : <Navigate to='/Login' /> } />
                <Route path="/signup" element={!authUser ? <SignupPage /> : <Navigate to='/' /> } />
                <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to='/' /> } />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to='/Login' />} />
            </Routes>

            <Toaster />
        </div>
    )
}

export default App