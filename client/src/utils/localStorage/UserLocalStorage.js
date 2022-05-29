export function getLoggedUser() {
    return JSON.parse(localStorage.getItem('loggedUser'));
}
export function setLoggedUser(user) {
    return localStorage.setItem('loggedUser', JSON.stringify(user));
}
export function logoutUser() {
    return JSON.parse(localStorage.removeItem('loggedUser'));
}
