import { Navigate } from 'react-router-dom';
import { getLoggedUser } from '../http-utils/user-requests';

export const AdminGuard = ({ children }) => {
    const isAdmin = getLoggedUser().role === 'admin';
    
    if (!isAdmin) {
        return <Navigate to="/404"></Navigate>;
    }
    return children;
};
