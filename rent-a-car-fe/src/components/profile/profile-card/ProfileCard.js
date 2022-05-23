import { useEffect, useState } from 'react';
import { getUserRents } from '../../../utils/http-utils/rent-requests';
import { Link } from 'react-router-dom';
import { RentCard } from '../../rent/rent-card/RentCard';
export const ProfileCard = ({ user }) => {
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
        <div class="flex justify-center m-5">
            <div class="bg-blue-200 rounded-xl ">
                <div class="p-5 text-left text-lg">
                    <h2>Full Name: {user.fullName}</h2>
                    <h2>Email: {user.email}</h2>
                    <h2>Phone: {user.phone}</h2>
                    <h2>Role: {user.role}</h2>
                    <Link to={`/edit-user/${user._id}`}>
                        <button class="bg-blue-300 hover:bg-blue-400 px-4 py-2 rounded-lg mt-5">
                            Edit your profile
                        </button>
                    </Link>
                </div>
                <div class=" bg-blue-100 rounded-b-xl">
                    <div>
                        {userRents.length > 0 ? (
                            <RentCard userRents={userRents} />
                        ) : (
                            <div class="bg-red-200">No rents yet</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
