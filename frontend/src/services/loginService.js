

//signup fecth function
export async function sign_up({
    name,
    email,
    password,
    address,
    city,
    postcode,
    phonenumber,
}) {
    return fetch(`${process.env.REACT_APP_BACKEND_ROOT_URL}/user/sign-up`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            password,
            address,
            city,
            postcode,
            phonenumber,
        })
    }).then(response => response.json());
};


//checks if the user is logged in
export function isLoggedIn() {
    return getToken() !== null;
};


//Logout function to end the login session in backend.
export async function logout({
    token, 
}) {
    return fetch(`${process.env.REACT_APP_BACKEND_ROOT_URL}/user/logout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
           token
        }),
    })
        .then(response => {
         return response.json();
            
        }).then(data => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }).catch(error => {
            console.log(error);
        })
}



//checks if user is admin
export function getUser() {
    const user = localStorage.getItem("user");
    return JSON.parse(user);
};



//checks if the user is authenticated
export function getToken() {
    const token = localStorage.getItem("token");
    console.log(token)
    if (!token) {
        return null;
    } else {
        return JSON.parse(token);
    }
};




const exports = {
    sign_up,
    getToken,
    isLoggedIn,
    logout,
    getUser,
};

export default exports;

