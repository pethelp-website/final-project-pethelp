//validate password and show Errors

export default function validateInfo(values) {
    let errors = {};

    //username
    if (!values.username.trim()) { // trim removes whitespace from both sides of a string
        errors.username = "Username is required";
    } 

    
    //email 
    if (!values.email) {
        errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) { //validation in regex format
        errors.email = "Email adress is invalid";
    }

    //Password
    if(!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 8) {
        errors.password = "Password needs to be 8 characters or more"
    }

    return errors;
};
