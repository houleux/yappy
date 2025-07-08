import React from 'react'
import Navbar from "daisyui/components/navbar/index.js";
import {Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import SettingsPage from "./pages/SettingsPage.jsx";
import ProfilePage from "./pages/ProfilePage";

import NavBar from "./components/NavBar";

const App = () => {
  return (
      <div>
          <NavBar />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
          </Routes>
      </div>
  )
}

export default App