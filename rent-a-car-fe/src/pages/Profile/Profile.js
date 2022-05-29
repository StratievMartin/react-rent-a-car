import { getLoggedUser } from '../../utils/localStorage/UserLocalStorage';
import { ProfileCard } from '../../components/ProfileCard/ProfileCard';

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
