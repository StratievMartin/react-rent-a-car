import { Link, useNavigate } from 'react-router-dom';
import { getLoggedUser, logoutUser } from '../../utils/services/UsersService';

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
            <div class="p-5 flex justify-between items-center bg-gray-500 ">
                <div class="space-x-5 ">
                    <Link to="/users-list" class="hover:text-red-400 transition ease-in-out delay-100">Users</Link>
                    <Link to="/cars-list" class="hover:text-red-400 transition ease-in-out delay-100">Cars</Link>
                </div>
                {isAdmin ? (
                    <div>
                        <Link to="/add-car" class="hover:text-red-400 transition ease-in-out delay-100">Add Cars</Link>
                    </div>
                ) : (
                    ''
                )}
                <div class="space-x-5">
                    <Link to="/profile" class="hover:text-red-400 transition ease-in-out delay-100">{loggedUser.fullName}</Link>
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
