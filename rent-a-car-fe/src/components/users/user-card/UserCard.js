import { useNavigate } from "react-router-dom"

export const UserCard = ({ user, deleteUser }) => {

    const navigate = useNavigate()
    const redirectToDetails = () => {
        navigate(`/users/${user._id}`)
    }
    const redirectToEdit = () => {
        navigate(`/update-user/${user._id}`)
    }
    if (!user) {
        return <p>No users</p>
    }
    return (
        <div class="bg-gray-600 rounded-lg shadow-2xl p-10 text-left flex justify-between">
            <div>
                <div>{user.fullName}</div>
                <div>{user.email}</div>
                <div>{user.phone}</div>
                <div>{user.role}</div>
                <div class="mt-5 cursor-pointer" onClick={redirectToDetails}>Read more</div>
                <div class="mt-5 cursor-pointer" onClick={redirectToEdit}>Edit</div>
            </div>
            <div onClick={() => deleteUser(user._id)}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg></div>
        </div>
    )
}