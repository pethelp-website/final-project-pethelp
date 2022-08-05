export default function validateInfo(values) {
    let errors = {};
    //validation in regex format
    const userNameValidation = /^[a-z0-9_-](?=.{6,10}$)/;;
    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    const minLengthRegExp = /.{6,20}/;
    const onlyLetters = /^[a-zA-Z]+$/;
    const lettersAndNumbers = /[^A-Za-z0-9]+/;


    const passwordLength = values.password.length;
    const uppercasePassword = uppercaseRegExp.test(values.password);
    const digitsPassword = digitsRegExp.test(values.password);
    const minLengthPassword = minLengthRegExp.test(values.password);
    const digitsPostcode = digitsRegExp.test(values.postcode);
    const digitsPhoneNumber = digitsRegExp.test(values.phonenumber);
    const onlyLettersCity = onlyLetters.test(values.city);
    const letterAndNumbersAdress = lettersAndNumbers.test(values.adress);



    //username
    if (!values.username.trim()) {
        errors.username = "Username is required";
    } else if (!userNameValidation.test(values.username)) {
        errors.username = "Minimum 6 characters long"
    };


    //email 
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email adress is invalid";
    }


    //Password- uppercase, one digit and 6 characters.
    if (passwordLength === 0) {
        errors.password = "Password is required";
    } else if (!uppercasePassword) {
        errors.password = "At least one Uppercase";
    } else if (!digitsPassword) {
        errors.password = "At least one digit";
    } else if (!minLengthPassword) {
        errors.password = "At least minumum 6 characters";
    };

    //adress- letters and numbers
    if (!letterAndNumbersAdress) {
        errors.adress = "Adress is required";
    } 

    //City- only letters.
    if (!onlyLettersCity) {
        errors.city = "City is required";
    }


    //Postcode- only numbers and 5 digits.
    if (!digitsPostcode) {
        errors.postcode = "Postcode is required";
    } else if (values.postcode.length < 5) {
        errors.postcode = "Invalid postcode";
    }

    //Phone number- only numbers and 9 digits.
    if (!digitsPhoneNumber) {
        errors.phonenumber = "Phone Number is required";
    } else if (values.phonenumber.length < 9) {
        errors.phonenumber = "Phone number is invalid";
    }

    return errors;
};




