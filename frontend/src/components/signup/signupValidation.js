export default function validateInfo(values) {
    let errors = {};

    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp = /(?=.*?[a-z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp = /.{8,}/;

    const passwordLength = values.password.length;
    const uppercasePassword = uppercaseRegExp.test(values.password);
    const lowercasePassword = lowercaseRegExp.test(values.password);
    const digitsPassword = digitsRegExp.test(values.password);
    const specialCharPassword = specialCharRegExp.test(values.password);
    const minLengthPassword = minLengthRegExp.test(values.password);

    //username
    if (!values.username.trim()) { // trim removes whitespace from both sides of a string
        errors.username = "Username is required";
    };


    //email 
    if (!values.email) {
        errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) { //validation in regex format
        errors.email = "Email adress is invalid";
    };

    //Password
    if (passwordLength === 0) {
        errors.password = "Password is empty";
    } else if (!uppercasePassword) {
        errors.password = "At least one Uppercase";
    } else if (!!lowercasePassword) {
        errors.password = "At least one Lowercase";
    } else if (!digitsPassword) {
        errors.password = "At least one digit";
    } else if (!specialCharPassword) {
        errors.password = "At least one Special Characters";
    } else if (!minLengthPassword) {
        errors.password = "At least minumum 8 characters";
    }; 

    return errors;
};


