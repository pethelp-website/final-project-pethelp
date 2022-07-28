//get values from the form. hooks
import { useState, useEffect} from "react";


const useForm = (callback, validateInfo) => { //using validate function here
  const [values, setValues] = useState({ //uptade the state
    username: "",
    email: "",
    password: "",
  })
  console.log(values);

  const [errors, setErrors] = useState({}); 
  const [isSubmitting, setIsSubmitting] = useState(false)  //action when form is submitted- start with false, because its not submitted yet.

  //update the values 
  const handleChange = (e) => {
    const { name, value} = e.target;
    
    setValues({
        ...values,
        [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();//prevent it from submitting a form. the page doesnt reefresh

    setErrors(validateInfo(values));//display errors using the validate function
    setIsSubmitting(true); //true after submit
  }

  useEffect(() => {
    if(Object.keys(errors).length === 0 && isSubmitting) { //0 errors
      callback();
    }
  }, [errors]);
  
  return {handleChange, values, handleSubmit, errors}; //return the function and the values, to use in the formSignup
}

export default useForm;
