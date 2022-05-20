import { Link } from 'react-router-dom';
export const Header = () => {
    return (
        <>
            <div class="p-5 flex justify-between bg-gray-500 ">
                <div class="space-x-5">
                    <Link to="/users-list">Users list</Link>
                    {/* <Link to="/cars-list">Cars list</Link>
                    <Link to="/rents-list">Rents list</Link> */}
                </div>
                <div class="space-x-5">
                    <Link to="/profile">Profile</Link>
                    <Link to="/logout">Logout</Link>
                </div>
            </div>
        </>
    );
};
