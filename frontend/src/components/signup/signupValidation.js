export default function validateInfo(values) {
    let errors = {};

    //validation in regex format
    const userNameValidation = /^[a-z0-9_-](?=.{8,20}$)/;;
    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    const minLengthRegExp = /.{6,20}/;


    const passwordLength = values.password.length;
    const uppercasePassword = uppercaseRegExp.test(values.password);
    const digitsPassword = digitsRegExp.test(values.password);
    const minLengthPassword = minLengthRegExp.test(values.password);



    //username
    if (!values.username.trim()) {
        errors.username = "Username is required";
    } else if (!userNameValidation.test(values.username)) {
        errors.username = "Minimum 8 characters long"
    };


    //email 
    if (!values.email) {
        errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email adress is invalid";
    };


    //Password
    if (passwordLength === 0) {
        errors.password = "Password is required";
    } else if (!uppercasePassword) {
        errors.password = "At least one Uppercase";
    } else if (!digitsPassword) {
        errors.password = "At least one digit";
    } else if (!minLengthPassword) {
        errors.password = "At least minumum 6 characters";
    };



    return errors;
};


