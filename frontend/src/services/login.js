//Here we have all codes that we can import and reuse it.


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

