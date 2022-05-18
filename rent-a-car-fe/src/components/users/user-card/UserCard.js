import { useNavigate } from 'react-router-dom';

export const UserCard = ({ user, deleteUser }) => {
    const navigate = useNavigate();
    const redirectToDetails = () => {
        navigate(`/users/${user._id}`);
    };
    const redirectToEdit = () => {
        navigate(`/register/${user._id}`);
    };
    if (!user) {
        return <p>No users</p>;
    }
    return (
        <div class="bg-gray-600 m-5 rounded-lg shadow-2xl p-10 text-left flex justify-between">
            <div class="w-full">
                <h2 class="text-lg font-bold">{user.fullName}</h2>
                <h3>{user.email}</h3>
                <h3>{user.phone}</h3>
                <h3>{user.role}</h3>
                <div class="flex justify-between mt-5">
                    <button
                        onClick={redirectToDetails}
                        class="bg-red-200 rounded-md px-4 py-2"
                    >
                        Read more
                    </button>
                    <button
                        onClick={redirectToEdit}
                        class="bg-red-200 rounded-md px-4 py-2"
                    >
                        Edit
                    </button>
                </div>
            </div>
            <div onClick={() => deleteUser(user._id)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-red-500 cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </div>
        </div>
    );
};
