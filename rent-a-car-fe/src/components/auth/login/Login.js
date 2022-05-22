import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../utils/http-utils/user-requests';
export const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(false);

    const onInputChange = (e) => {
        setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const onFormSubmit = (e) => {
        e.preventDefault();
        login(user)
            .then(() => {
                navigate('/users-list');
            })
            .catch((err) => setError(err.message));
    };
    return (
        <>
            <div>
                {/* class="bg-gray-400 h-screen" */}
                <form onSubmit={onFormSubmit}>
                    <div class="flex justify-center items-center h-screen ">
                        <div class="text-left space-y-3 bg-blue-200 border-2 border-black p-10">
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    onChange={onInputChange}
                                    value={user.email}
                                    class="flex justify-end p-2 "
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Email..."
                                    required
                                />
                            </div>
                            {error ? (
                                <span class="text-red-600">{error}</span>
                            ) : (
                                ''
                            )}
                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    onChange={onInputChange}
                                    value={user.password}
                                    class="flex justify-end p-2 "
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password..."
                                    required
                                />
                            </div>
                            <div class="space-y-2">
                                <div class="flex justify-center ">
                                    <button
                                        class="bg-green-300 hover:bg-green-400 px-4 py-2 rounded-lg "
                                    >
                                        Login
                                    </button>
                                </div>
                                <div class="text-center">
                                    <p>Don't have an account? </p>
                                    <Link to="/register">
                                        <button class="bg-blue-100 p-2 hover:bg-blue-300 rounded-md mt-2">
                                            Register here!
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};
