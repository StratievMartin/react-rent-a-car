import { useEffect, useState } from 'react';
import { getUserRents } from '../../utils/http-utils/rent-requests';
import { getLoggedUser, getUser } from '../../utils/http-utils/user-requests';
export const Profile = () => {
    const [user, setUser] = useState();
    const [userRents, setUserRents] = useState([]);

    useEffect(() => {
        setUser(getLoggedUser());
    }, []);

    useEffect(() => {
        if (user) {
            getUserRents(user._id)
                .then((res) => {
                    console.log(res.data);
                    setUserRents(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [user]);

    return (
        <>
            {user ? (
                <>
                    <h2>{user._id}</h2>
                    <h2>{user.fullName}</h2>
                    <h2>{user.email}</h2>
                    <h2>{user.phone}</h2>
                    <h2>{user.role}</h2>
                </>
            ) : (
                ''
            )}
            {userRents.length > 0 ? userRents : 'No rents yet'}
        </>
    );
};
