//Here we have all codes that we can import and reuse it.


export async function sign_up({
    username,
    email,
    password,
    adress,
    city,
    postcode,
    phonenumber,
}) {
    return fetch("https://run.mocky.io/v3/b1734bbd-64b6-42e0-9350-69f76fdaff42", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            email,
            password,
            adress,
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

