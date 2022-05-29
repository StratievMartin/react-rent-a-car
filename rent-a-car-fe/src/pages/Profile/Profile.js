import { getLoggedUser } from '../../utils/services/UsersService';
import { ProfileCard } from '../../components/profile-card/ProfileCard';

export const Profile = () => {
    const user = getLoggedUser();

    return (
        <>
            {user ? (
                <>
                    <ProfileCard user={user} />
                </>
            ) : (
                <div>No user</div>
            )}
        </>
    );
};
