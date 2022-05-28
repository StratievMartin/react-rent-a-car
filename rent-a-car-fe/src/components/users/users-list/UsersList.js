import { useState, useEffect } from 'react';
import {
    getAllUsers,
    deleteUser,
} from '../../../utils/http-utils/user-requests';
import { UserCard } from '../user-card/UserCard';

export const UsersList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then((res) => {
            setUsers(res.data);
        });
    }, []);
    return (
        <div class="grid lg:grid-cols-3 md:grid-cols-2">
            {users &&
                users.map((user) => <UserCard key={user._id} user={user} />)}
        </div>
    );
};
