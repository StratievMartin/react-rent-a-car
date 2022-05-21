import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../utils/http-utils/user-requests';
export const Header = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/login');
        logoutUser();
    };
    return (
        <>
            <div class="p-5 flex justify-between bg-gray-500 ">
                <div class="space-x-5">
                    <Link to="/users-list">Users list</Link>
                    <Link to="/cars-list">Cars list</Link>
                    <Link to="/add-car">Add Cars</Link>
                    {/* <Link to="/rents-list">Rents list</Link> */}
                </div>
                <div class="space-x-5">
                    <Link to="/profile">Profile</Link>
                    <button onClick={() => handleLogout()}>Logout</button>
                </div>
            </div>
        </>
    );
};
