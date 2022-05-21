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
    // {
    //     brand: 's-class',
    //     model: 'mercedes',
    //     constructionYear: 2005,
    //     carType:  enum: ['economy', 'estate', 'luxury', 'SUV', 'cargo'],    ,
    //     fuel: 'enum: ['petrol', 'diesel', 'hybrid', 'electric'],',
    //     seats: 2,
    //     picture: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.auto-data.net%2Fen%2Fmercedes-benz-e-class-model-1393&psig=AOvVaw3k9YBsiTlyYljzAAw_mKE9&ust=1652210962627000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCKDcp8-T0_cCFQAAAAAdAAAAABAD',
    //     pricePerDay: 100,
    //     carsAvailable: 3,
    // }
    return axios.post(`${apiUrl}/add-car`, data);
}
export function updateCar(id, data) {
    return axios.put(`${apiUrl}/update-car/${id}`, data);
}
export function deleteCar(id) {
    return axios.delete(`${apiUrl}/delete-car/${id}`);
}
