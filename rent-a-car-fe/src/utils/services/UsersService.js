import axios from 'axios';

// mongo
const apiUrl = 'http://localhost:1111';

export function getLoggedUser() {
    return JSON.parse(localStorage.getItem('loggedUser'));
}
export function setLoggedUser(user) {
    return localStorage.setItem('loggedUser', JSON.stringify(user));
}
export function logoutUser() {
    return JSON.parse(localStorage.removeItem('loggedUser'));
}
// Users requests
export function getAllUsers() {
    return axios.get(`${apiUrl}/users`);
}
export function getUser(id) {
    return axios.get(`${apiUrl}/users/${id}`);
}
export async function addUser(data) {
    const alreadyExists = await axios.get(`${apiUrl}/check-email/${data.email}`)
        .data;
    if (alreadyExists) {
        throw new Error('Email taken');
    }
    return axios.post(`${apiUrl}/add-user`, data);
}
export async function login(user) {
    const allUsers = (await getAllUsers()).data;

    const foundUser = allUsers.find(
        (u) => u.email === user.email && u.password === user.password
    );
    if (!foundUser) {
        throw new Error('Invalid credentials');
    }
    delete foundUser.password;
    setLoggedUser(foundUser);
    return foundUser;
}
export function updateUser(id, data) {
    return axios.put(`${apiUrl}/update-user/${id}`, data);
}
export function deleteUser(id) {
    return axios.delete(`${apiUrl}/delete-user/${id}`);
}