import './App.css';
import { Route, Routes } from 'react-router-dom';

import { AuthenticatedGuard } from './utils/guards/AuthenticatedGuard';
import { NonAuthenticatedGuard } from './utils/guards/NonAuthenticatedGuard';
import { AdminGuard } from './utils/guards/AdminGuard';

import { Layout } from './components/Layout/Layout';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';

import { Profile } from './pages/Profile/Profile';
import { UsersList } from './pages/Users/UsersList/UsersList';
import { EditUser } from './pages/Users/EditUser/EditUser';
import { User } from './pages/Users/User/User';
import { CarsList } from './pages/Cars/CarsList/CarsList';
import { EditCar } from './pages/Cars/EditCar/EditCar';
import { Car } from './pages/Cars/Car/Car';
import { ErrorPage } from './pages/Error/ErrorPage';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    exact
                    path="/login"
                    element={
                        <NonAuthenticatedGuard>
                            <Login />
                        </NonAuthenticatedGuard>
                    }
                />
                <Route
                    exact
                    path="/register"
                    element={
                        <NonAuthenticatedGuard>
                            <Register />
                        </NonAuthenticatedGuard>
                    }
                />
                <Route
                    exact
                    path="/"
                    element={
                        <AuthenticatedGuard>
                            <Layout />
                        </AuthenticatedGuard>
                    }
                >
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/edit-user/:id" element={<EditUser />} />
                    <Route path="/users-list" element={<UsersList />} />
                    <Route path="/users/:id" element={<User />} />

                    <Route path="/cars-list" element={<CarsList />} />
                    <Route path="/cars/:id" element={<Car />} />
                </Route>

                <Route exact path="/" element={<AdminGuard />}>
                    <Route path="/add-car" element={<EditCar />} />
                    <Route path="/edit-car/:id" element={<EditCar />} />
                </Route>

                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    );
}

export default App;
