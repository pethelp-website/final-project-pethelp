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
    return fetch("http://localhost:3000/user/sign-up", {
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
const logout = async () => {
    return fetch("https://run.mocky.io/v3/e6c1e99e-557a-49c7-bc7c-dd44c1c66531", {
        method: "POST",
    })
        .then(response => {
            console.log(response);
        }).then(data => {
            localStorage.removeItem('token');
            console.log(data);
        });
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
}

const exports = {
    sign_up,
    getAuthenticatedUser,
    isLoggedIn,
    logout
}
export default exports;

