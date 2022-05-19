import axios from "axios"

// mongo
const apiUrl = 'http://localhost:1111';

// Rents requests
export function getUserRents(id) {
    return axios.get(`${apiUrl}/user-rents/${id}`)
}
export function getAllRents() {
    return axios.get(`${apiUrl}/rents`)
}
export function getRent(id) {
    return axios.get(`${apiUrl}/rents/${id}`)
}
export function addRent(data) {
    // {
    //     startDate: '11.11.2022',
    //     endDate: '22.11.2022',
    //     car: '62815746aa25130cd3606db1',
    //     customer: '62815756aa25130cd3606db6'
    // }
    return axios.post(`${apiUrl}/add-rent`, data)
}
export function updateRent(id, data) {
    return axios.put(`${apiUrl}/update-rent/${id}`, data)
}
export function deleteRent(id) {
    return axios.delete(`${apiUrl}/delete-rent/${id}`)
}