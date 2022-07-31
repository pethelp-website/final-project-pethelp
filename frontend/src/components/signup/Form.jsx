//this component gonna renders in the app, and if the form is submitted, goes to home page.

import React, { useState } from 'react';
import FormSignup from "./FormSignup";
import HomePage from "../home/HomePage";

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    };
  
    return (
        <div>
            
            {!isSubmitted ? (<FormSignup submitForm={submitForm} />): (<HomePage />)} 
        </div>
    )
};

export default Form;
