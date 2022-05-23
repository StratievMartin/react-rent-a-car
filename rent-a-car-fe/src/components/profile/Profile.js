import { getLoggedUser } from '../../utils/http-utils/user-requests';
import { ProfileCard } from './profile-card/ProfileCard';

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
