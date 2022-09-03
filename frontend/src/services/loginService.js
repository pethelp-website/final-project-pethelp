//Here we have all functions that we can import and reuse it.


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
    return fetch("http://localhost:4000/user/sign-up", {
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
    return getAuthenticatedUser() !== null;
};


//Logout function to end the login session in backend.
export async function logout({
    email, 
    password,
}) {
    return fetch("http://localhost:4000/user/logout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    })
        .then(response => {
         return response.json();
            
        }).then(data => {
            localStorage.removeItem('token');
            console.log(data);
        }).catch(error => {
            console.log(error);
        })
}

 



//checks if the user is authenticated
export function getAuthenticatedUser() {
    const user = localStorage.getItem("token");
    console.log(user)
    if (!user) {
        return null;
    } else {
        return JSON.parse(user);
    }
};




const exports = {
    sign_up,
    getAuthenticatedUser,
    isLoggedIn,
    logout
};

export default exports;

