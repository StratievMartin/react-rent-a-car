import axios from 'axios';

// mongo
const apiUrl = 'http://localhost:1111';

// Cars requests
export function getAllCars() {
    return axios.get(`${apiUrl}/cars`);
}
export function getCar(id) {
    return axios.get(`${apiUrl}/cars/${id}`);
}
export function addCar(data) {
    return axios.post(`${apiUrl}/add-car`, data);
}
export function updateCar(id, data) {
    return axios.put(`${apiUrl}/update-car/${id}`, data);
}
export function deleteCar(id) {
    return axios.delete(`${apiUrl}/delete-car/${id}`);
}
