import axios from 'axios'

export async function Authenticate(mode, email, password) {
    API_KEY = 'AIzaSyCOskKMZbRIpJbDdPAxtW-Vu3borBZslmo';
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

    const response = await axios.post(url,
        {
            email: email,
            password: password,
            returnSecureToken: true
        });
    const token = response.data.idToken;
    return token;
}




export function createUser(email, password) {
    return Authenticate("signUp", email, password);
}

export function login(email, password) {
    return Authenticate("signInWithPassword", email, password);
}