import React from 'react';
import FormSignup from "./components/signup/FormSignup";
import HomePage from "./components/home/HomePage";
import MainHome from "../src/components/home/mainhome/MainHome";
import FormLogin from "../src/components/login/FormLogin";
import HomeFooter from "../src/components/home/homefooter/HomeFooter";
import HomeHeader from "../src/components/home/homeheader/HomeHeader";
import AdmPage from "./components/userspage/adm/AdmPage";
import UserPage from "./components/userspage/user/UserPage.jsx";
import ReportPage from "../src/components/reportpage/ReportPage";
import MissingPage from "../src/components/missingpage/MissingPage";
import ReportMessage from "../src/components/reportpage/ReportMessage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.scss";


function App() {
  return (
    <div className="app-container">

      <Router>
        <div>
          <HomeHeader />
        </div>
        <div className="main-app">
          <Routes>
            <Route path="/" element={<HomePage />}>
            </Route>
            <Route path="/sign-up" element={<FormSignup />}>
            </Route>
            <Route path="/login" element={<FormLogin />}>
            </Route>
            <Route path="/main-home" element={<MainHome />}>
            </Route>
            <Route path="/footer" element={<HomeFooter />}>
            </Route>
            <Route path="/adm-page" element={<AdmPage />}>
            </Route>
            <Route path="/user-page" element={<UserPage />}>
            </Route>
            <Route path="/report-page" element={<ReportPage />}>
            </Route>
            <Route path="/missing-page" element={<MissingPage />}>
            </Route>
            <Route path="/report-message" element={<ReportMessage />}>
            </Route>
          </Routes>
        </div>
        <div>
          <HomeFooter />
        </div>
      </Router>
    </div>

  );
}

export default App;

