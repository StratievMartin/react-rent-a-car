import axios from "axios"

// mongo
const apiUrl = 'http://localhost:1111';

// Users requests
export function getAllUsers() {
    return axios.get(`${apiUrl}/users`)
}
export function getUser(id) {
    return axios.get(`${apiUrl}/users/${id}`)
}
export function addUser(data) {
    // {
    //     fullName: 'Martin Stratiev',
    //     email: 'martinstratiev@gmail.com',
    //     phone: 3591231231,
    //     role: 'customer',
    // }
    return axios.post(`${apiUrl}/add-user`, { data })
}
export function updateUser(id, data) {
    return axios.put(`${apiUrl}/update-user/${id}`, { data })
}
export function deleteUser(id) {
    return axios.get(`${apiUrl}/delete-user/${id}`)
}