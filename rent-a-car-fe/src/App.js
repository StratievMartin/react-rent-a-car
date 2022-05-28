import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Login } from './components/auth/login/Login';
import { Register } from './components/auth/register/Register';
import { UsersList } from './components/users/users-list/UsersList';
import { User } from './components/users/user/User';
import { AuthenticatedGuard } from './utils/guards/AuthenticatedGuard';
import { NonAuthenticatedGuard } from './utils/guards/NonAuthenticatedGuard';
import { Profile } from './components/profile/Profile';
import { ErrorPage } from './pages/ErrorPage';
import { CarsList } from './components/cars/cars-list/CarsList';
import { CarForm } from './components/cars/car-form/CarForm';
import { Car } from './components/cars/car/Car';
import { AdminGuard } from './utils/guards/AdminGuard';

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
                    <Route path="/edit-user/:id" element={<Register />} />
                    {/* user */}
                    <Route path="/users-list" element={<UsersList />} />
                    <Route path="/users/:id" element={<User />} />
                    {/* car */}
                    <Route path="/cars-list" element={<CarsList />} />
                    <Route path="/cars/:id" element={<Car />} />
                    {/* <Route path="/add-car" element={<CarForm />} />
                    <Route path="/edit-car/:id" element={<CarForm />} /> */}
                </Route>
                <Route exact path="/" element={<AdminGuard />}>
                    <Route path="/add-car" element={<CarForm />} />
                    <Route path="/edit-car/:id" element={<CarForm />} />
                </Route>

                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    );
}

export default App;
