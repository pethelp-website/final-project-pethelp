import React from 'react';
import FormSignup from "./components/signup/FormSignup";
import HomePage from "./components/home/HomePage";
import MainHome from "../src/components/home/mainhome/MainHome";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
        </Route>
        <Route path="/sign-up" element={<FormSignup />}>
        </Route>
        <Route path="/main-home" element={<MainHome />}>
        </Route>
      </Routes>
    </Router>

  );
}

export default App;

