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

    const deleteUserHandler = async (id) => {
        await deleteUser(id);
        setUsers((prev) => {
            return prev.filter((user) => user._id !== id);
        });
    };
    return (
        <div class="grid lg:grid-cols-3 md:grid-cols-2">
            {users &&
                users.map((user) => (
                    <UserCard
                        key={user.id}
                        user={user}
                        deleteUser={deleteUserHandler}
                    />
                ))}
        </div>
    );
};
