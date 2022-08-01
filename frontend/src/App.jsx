import React from 'react';
import FormSignup from "./components/signup/FormSignup";
import HomePage from "./components/home/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (

    <Router>
      <div>
        <div>Header</div>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />}>
            </Route>
            <Route path="/sign-up" element={<FormSignup />}>
            </Route>
          </Routes>
        </div>
        <div>Footer</div>
      </div>
    </Router>

  );
}

export default App;

