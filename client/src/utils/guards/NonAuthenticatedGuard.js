import { Navigate } from 'react-router-dom';
import { getLoggedUser } from '../localStorage/UserLocalStorage';

export const NonAuthenticatedGuard = ({ children }) => {
    const user = getLoggedUser();

    if (user) {
        return <Navigate to="/users-list"></Navigate>;
    }
    return children;
};
