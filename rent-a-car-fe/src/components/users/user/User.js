import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteUser, getUser } from '../../../utils/http-utils/user-requests';
import { UserCard } from '../user-card/UserCard';

export const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getUser(id).then((res) => {
            setUser(res.data);
        });
    }, []);
    const deleteUserHandler = async (id) => {
        await deleteUser(id);
        navigate('/users-list')
    };
    return (
        <>
            <UserCard user={user} deleteUser={deleteUserHandler} />
        </>
    );
};
