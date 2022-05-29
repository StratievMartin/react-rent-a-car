import {  Outlet } from 'react-router-dom';
import { ErrorPage } from '../../pages/Error/ErrorPage';
import { getLoggedUser } from '../localStorage/UserLocalStorage';

export const AdminGuard = () => {
    const isAdmin = getLoggedUser().role === 'admin';

    return isAdmin ? <Outlet /> : <ErrorPage />;
};
