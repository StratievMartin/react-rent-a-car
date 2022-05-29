import { Route, Routes } from 'react-router-dom';
import { Profile } from '../../pages/Profile/Profile';
import { UsersList } from '../../pages/Users/UsersList/UsersList';
import { EditUser } from '../../pages/Users/EditUser/EditUser';
import { User } from '../../pages/Users/User/User';
import { CarsList } from '../../pages/Cars/CarsList/CarsList';
import { Car } from '../../pages/Cars/Car/Car';

export const Main = () => {
    return (
        <>
            <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/users-list" element={<UsersList />} />
                <Route path="/users/:id" element={<User />} />
                <Route path="/edit-user/:id" element={<EditUser />} />
                <Route path="/cars-list" element={<CarsList />} />
                <Route path="/cars/:id" element={<Car />} />
            </Routes>
        </>
    );
};
