//get values from the form. hooks
import {useState, useEffect} from "react";

const useForm = () => {
  const [values, setValues] = useState({ //uptade the state
    username: "",
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({}); 

  //update the values 
  const handleChange = (e) => {
    const { name, value} = e.target;
    
    setValues({
        ...values,
        [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault(); //prevent it from submitting a form. the page doesnt reefresh
  }
  
  return {handleChange, values, handleSubmit,}; //return the function and the values, to use in the formSignup
}

export default useForm;
