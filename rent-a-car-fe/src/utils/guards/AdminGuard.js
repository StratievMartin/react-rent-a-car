import { Navigate, Outlet } from 'react-router-dom';
import { ErrorPage } from '../../pages/ErrorPage';
import { getLoggedUser } from '../http-utils/user-requests';

export const AdminGuard = () => {
    const isAdmin = getLoggedUser().role === 'admin';

    return isAdmin ? <Outlet /> : <ErrorPage />;
};
