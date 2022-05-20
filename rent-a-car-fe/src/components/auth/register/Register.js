import {
    addUser,
    getUser,
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
            .then((res) => navigate('/users-list'))
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        if (params.id) {
            getUser(params.id).then((res) => setUser(res.data));
        }
    }, [params.id]);

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <div class="flex justify-center">
                    <div class="text-left space-y-3 bg-blue-200 border-2 border-black p-10">
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
                            <label htmlFor="role">Admin</label>
                            <select
                                onChange={onInputChange}
                                value={user.role}
                                name="role"
                                id="role"
                                required
                            >
                                <option value="customer ">Customer</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div class="space-y-2">
                            <div class="flex justify-center ">
                                <button
                                    onClick={() =>
                                        params.id
                                            ? updateUserHandler()
                                            : addUserHandler()
                                    }
                                    class="bg-green-300 hover:bg-green-400 px-4 py-2 rounded-lg "
                                >
                                    Register
                                </button>
                            </div>
                            <div class="text-center">
                                <p>Already have an account? </p>
                                <Link to="/login">
                                    <button class="bg-blue-100 p-2 hover:bg-blue-300 rounded-md mt-2">
                                        Login here!
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};
