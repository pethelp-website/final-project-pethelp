
const mockResponseSignup = {
    "jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7fSwiaWF0IjoxNjU4OTU1NDIyLCJleHAiOjE2NTg5NTkwMjJ9.xYTFDomtgFTfvQMpTl1FK_SzVzyVYTqDaN4tb0uNCfI",
    "isAuthenticated": true,
    "name": "Alissa Nishihara"
}

const environment = "https://localhost";


export function sign_up({
    username,
    email,
    password
}) {
    /*return fetch(environment + "/api/sign-up", {
        method: "POST",
        headers: {
            //authorization: getLocalStorageInfo(),
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            email,
            password,
        })
    }).then(response => response.json())*/
    return Promise.resolve(mockResponseSignup)
};

export function getAuthenticatedUser() {
    const user = localStorage.getItem("token");
    if (!user) {
        return null;
    } else {
        return JSON.parse(user);
    }
}
const exports = {
    sign_up,
    getAuthenticatedUser
}
export default exports;