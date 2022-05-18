import { Route, Routes } from 'react-router-dom';
import { Header } from '../header/Header';
import { UsersList } from '../users/users-list/UsersList';
import { User } from '../users/user/User';
import { UserForm } from '../users/user-form/UserForm';

export const Main = () => {
    return (
        <>
            <Routes>
                {/* users */}
                <Route path="/users-list" element={<UsersList />} />
                <Route path="/users/:id" element={<User />} />
                <Route path="/register" element={<UserForm />} />
                <Route path="/update-user/:id" element={<UserForm />} />
                {/* auth */}
                <Route path="/register" element={<UserForm />} />
            </Routes>
        </>
    );
};
