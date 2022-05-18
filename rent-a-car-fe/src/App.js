import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Login } from './components/auth/login/Login';
import { Register } from './components/auth/register/Register';
import { UsersList } from './components/users/users-list/UsersList';
import { User } from './components/users/user/User';
import { AuthenticatedRoute } from './utils/guards/AuthenticatedRoute';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/" element={<Layout />}>
                    <Route
                        path="/users-list"
                        element={
                            <AuthenticatedRoute>
                                <UsersList />
                            </AuthenticatedRoute>
                        }
                    />
                    <Route
                        path="/users/:id"
                        element={
                            <AuthenticatedRoute>
                                <User />
                            </AuthenticatedRoute>
                        }
                    />
                    {/* <Route path="/register/:id" element={<Register />} /> */}
                    {/* auth */}
                </Route>
            </Routes>
        </div>
    );
}

export default App;
