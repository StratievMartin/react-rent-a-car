import { useEffect, useState } from 'react';
import { getUserRents } from '../../utils/http-utils/rent-requests';
import { getLoggedUser, getUser } from '../../utils/http-utils/user-requests';
import { Link } from 'react-router-dom';

export const Profile = () => {
    const user = getLoggedUser();
    const [userRents, setUserRents] = useState([]);

    useEffect(() => {
        if (user) {
            getUserRents(user._id)
                .then((res) => {
                    setUserRents(res.data);
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    return (
        <>
            {user ? (
                <>
                    <div class="bg-blue-200">
                        <h2>{user._id}</h2>
                        <h2>{user.fullName}</h2>
                        <h2>{user.email}</h2>
                        <h2>{user.phone}</h2>
                        <h2>{user.role}</h2>
                        <div>
                            {userRents.length > 0 ? (
                                userRents.map((rent) => <div>{rent.car.brand}</div>)
                            ) : (
                                <div class="bg-red-200">No rents yet</div>
                            )}
                        </div>
                    </div>
                    <Link to={`/edit-user/${user._id}`}>
                        <button class="bg-blue-300 px-4 py-2 rounded-lg mt-5">
                            Edit your profile
                        </button>
                    </Link>
                </>
            ) : (
                <div>No user</div>
            )}
        </>
    );
};
