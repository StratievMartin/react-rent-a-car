import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../../utils/http-utils/user-requests';
import { UserCard } from '../user-card/UserCard';
export const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        getUser(id).then((res) => {
            setUser(res.data);
            // console.log(user);
        });
    }, []);

    return (
        <>
            <UserCard user={user} />
        </>
    );
};
