import {
    addUser,
    getLoggedUser,
    getUser,
    setLoggedUser,
    updateUser,
} from '../../../utils/http-utils/user-requests';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const Register = () => {
    // {
    //     fullName: 'Martin Stratiev',
    //     email: 'martinstratiev@gmail.com',
    //     password: ,
    //     phone: 3591231231,
    //     role: 'customer',
    // }
    const navigate = useNavigate();
    const params = useParams();
    const loggedUser = getLoggedUser();
    
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        role: 'customer',
    });
    const [error, setError] = useState(false);

    const onFormSubmit = (e) => {
        e.preventDefault();
    };
    const onInputChange = (e) => {
        setUser((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
        setError(false);
    };
    const addUserHandler = async () => {
        await addUser(user)
            .then((res) => navigate('/users-list'))
            .catch((err) => setError(err.message));
    };
    const updateUserHandler = async () => {
        await updateUser(user._id, user)
            .then((res) => {
                if (!loggedUser.role === 'admin') {
                    setLoggedUser(user);
                }
                navigate('/users-list');
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        if (params.id) {
            getUser(params.id).then((res) => setUser(res.data));
        }
    }, [params.id]);

    return (
        <div class="bg-gray-400 h-screen">
            <form onSubmit={onFormSubmit}>
                <div
                    class={
                        params ? 'flex justify-center items-center h-screen' : 'items-center h-screen'
                    }
                >
                    <div class="text-left space-y-3 bg-gray-300 border-2 border-gray rounded-xl p-10">
                        <div>
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                onChange={onInputChange}
                                value={user.fullName}
                                class="flex justify-end p-2 "
                                type="text"
                                name="fullName"
                                id="fullName"
                                placeholder="Full Name..."
                                required
                            />
                        </div>
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
                        {error ? <span class="text-red-600">{error}</span> : ''}
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
                        <div>
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                onChange={onInputChange}
                                value={user.phone}
                                class="flex justify-end p-2 "
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Phone number..."
                                required
                            />
                        </div>
                        <div class="">
                            <label htmlFor="role" class="block ">
                                User type
                            </label>
                            <select
                                onChange={onInputChange}
                                value={user.role}
                                name="role"
                                id="role"
                                required
                            >
                                <option value="customer">Customer</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div class="space-y-10">
                            <div class="flex justify-center ">
                                <button
                                    onClick={() =>
                                        params.id
                                            ? updateUserHandler()
                                            : addUserHandler()
                                    }
                                    class="bg-green-200 hover:bg-green-300 px-4 py-2 border-2 border-gray rounded-md"
                                >
                                    {params ? 'Save' : 'Register'}
                                </button>
                            </div>
                            {!params.id ? (
                                <div class="text-center">
                                    <p>Already have an account? </p>
                                    <Link to="/login">
                                        <button class="bg-blue-200 p-2 hover:bg-blue-300 border-2 border-gray rounded-md mt-2">
                                            Login here!
                                        </button>
                                    </Link>
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
