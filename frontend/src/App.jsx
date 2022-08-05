import React from 'react';
import FormSignup from "./components/signup/FormSignup";
import HomePage from "./components/home/HomePage";
import MainHome from "../src/components/home/mainhome/MainHome";
import FormLogin from "../src/components/login/FormLogin";
import HomeFooter from "../src/components/home/homefooter/HomeFooter";
import HomeHeader from "../src/components/home/homeheader/HomeHeader";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div>
        <HomeHeader />
        </div>
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
        </Routes>
      </Router>
    </div>

  );
}

export default App;

