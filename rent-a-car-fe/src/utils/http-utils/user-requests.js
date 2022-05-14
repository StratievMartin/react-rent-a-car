import axios from "axios"

// mongo
const apiUrl = 'http://localhost:3005/users';

export function getAllUsers(){
    return axios.get(apiUrl)
}