//validate password and show Errors

export default function validateInfo(values) {
    let errors = {};

    if (!values.username.trim()) { // trim removes whitespace from both sides of a string
        errors.username = "Username required";
    } 

    
    //email 
    if (!values.email) {
        errors.email = "Email required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email adress is invalid";
    }

    //Password
    if(!values.password) {
        errors.password = "Password is required";
    } else if (!values.password.length < 6) {
        errors.password = "Password needs to be 6 characters or more"
    }
};
