import { Route, Routes } from 'react-router-dom';
import { UsersList } from '../users/users-list/UsersList';
import { User } from '../users/user/User';
import { Profile } from '../profile/Profile';
import { Register } from '../auth/register/Register';
import { CarsList } from '../cars/cars-list/CarsList';
import { CarForm } from '../cars/car-form/CarForm';
import { Car } from '../cars/car/Car';
export const Main = () => {
    return (
        <>
            <Routes>
                <Route path="/profile" element={<Profile />} />
                {/*  */}
                <Route path="/users-list" element={<UsersList />} />
                <Route path="/users/:id" element={<User />} />
                <Route path="/edit-user/:id" element={<Register />} />
                {/*  */}
                <Route path="/add-car" element={<CarForm />} />
                <Route path="/cars-list" element={<CarsList />} />
                <Route path="/cars/:id" element={<Car />} />
                <Route path="/edit-car/:id" element={<CarForm />} />
            </Routes>
        </>
    );
};
