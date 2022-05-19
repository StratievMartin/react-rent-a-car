import { Route, Routes } from 'react-router-dom';
import { UsersList } from '../users/users-list/UsersList';
import { User } from '../users/user/User';
export const Main = () => {
    return (
        <>
            <Routes>
                <Route path="/users-list" element={<UsersList />} />
                <Route path="/users/:id" element={<User />} />
            </Routes>
        </>
    );
};
