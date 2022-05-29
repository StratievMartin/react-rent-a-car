import { useNavigate, useParams } from 'react-router-dom';
import { getLoggedUser } from '../../utils/services/UsersService';

export const UserCard = ({ user, deleteUser }) => {
    const navigate = useNavigate();
    const params = useParams().id;
    const isAdmin = getLoggedUser().role === 'admin';

    const redirectToDetails = () => {
        navigate(`/users/${user._id}`);
    };
    const redirectToEdit = () => {
        navigate(`/edit-user/${user._id}`);
    };
    if (!user) {
        return <p>No users</p>;
    }
    return (
        <div class="bg-gray-600 m-5 rounded-lg shadow-2xl p-10 text-left ">
            <div class="flex justify-between items-center w-full">
                <div>
                    <h2 class="text-lg font-bold">{user.fullName}</h2>
                    {params ? (
                        <>
                            <h3>email: {user.email}</h3>
                            <h3>phone: +{user.phone}</h3>
                            <h3>role: {user.role}</h3>
                        </>
                    ) : (
                        ''
                    )}
                </div>
                <div class="flex-row space-y-10 ">
                    {isAdmin && params ? (
                        <div
                            class="flex justify-end"
                            onClick={() => deleteUser(user._id)}
                        >
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
                    ) : (
                        ''
                    )}
                    <div class="">
                        {params ? (
                            isAdmin ? (
                                <button
                                    onClick={redirectToEdit}
                                    class="bg-blue-200 hover:bg-blue-300 rounded-md px-4 py-2 "
                                >
                                    Edit
                                </button>
                            ) : (
                                ''
                            )
                        ) : (
                            <button
                                onClick={redirectToDetails}
                                class="bg-blue-200 hover:bg-blue-300 rounded-md px-4 py-2 "
                            >
                                Read more
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
