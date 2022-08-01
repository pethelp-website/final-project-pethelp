//Here we have all codes that we can import and reuse it.


export async function sign_up({
    username,
    email,
    password
}) {
    return fetch("http://localhost:3000/user/sign-up", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            email,
            password,
        })
    }).then(response => response.json());
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
