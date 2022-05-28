import { Link, useNavigate } from 'react-router-dom';
import {
    getLoggedUser,
    logoutUser,
} from '../../utils/http-utils/user-requests';

export const Header = () => {
    const navigate = useNavigate();
    const loggedUser = getLoggedUser();
    const isAdmin = getLoggedUser().role === 'admin';

    const handleLogout = () => {
        navigate('/login');
        logoutUser();
    };

    return (
        <>
            <div class="p-5 flex justify-between bg-gray-500 ">
                <div class="space-x-5">
                    <Link to="/users-list">Users</Link>
                    <Link to="/cars-list">Cars</Link>
                </div>
                {isAdmin ? (
                    <div>
                        <Link to="/add-car">Add Cars</Link>
                    </div>
                ) : (
                    ''
                )}
                <div class="space-x-5">
                    <Link to="/profile">{loggedUser.fullName}</Link>
                    <button
                        class="bg-red-400 hover:bg-red-500 px-2 py-1 rounded-lg "
                        onClick={() => handleLogout()}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
};
