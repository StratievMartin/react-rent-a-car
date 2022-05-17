import { addUser, getUser, updateUser } from "../../../utils/http-utils/user-requests"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
export const UserForm = () => {
    // {
    //     fullName: 'Martin Stratiev',
    //     email: 'martinstratiev@gmail.com',
    //     password: ,
    //     phone: 3591231231,
    //     role: 'customer',
    // }

    const navigate = useNavigate()
    const params = useParams()
    const [user, setUser] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        role: 'customer',
    })

    const onFormSubmit = (e) => {
        e.preventDefault()
    }
    const onInputChange = (e) => {
        setUser((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    const addUserHandler = async () => {
        await addUser(user)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        navigate('/users-list')
    }
    const updateUserHandler = async () => {
        await updateUser(user._id, user)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        navigate('/users-list')
    }
    useEffect(() => {
        if (params.id) {
            getUser(params.id)
                .then((res) =>
                    setUser(res.data))
        }
    }, [params.id])


    return (
        <>
            <form onSubmit={onFormSubmit}>
                <div class="flex justify-center">
                    <div class="text-left space-y-3">
                        <div>
                            <label htmlFor="fullName">Full Name</label>
                            <input onChange={onInputChange} value={user.fullName} class="flex justify-end p-2 " type="text" name="fullName" id="fullName" placeholder="Full Name..."  required/>
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input onChange={onInputChange} value={user.email} class="flex justify-end p-2 " type="text" name="email" id="email" placeholder="Email..."  required/>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input onChange={onInputChange} value={user.password} class="flex justify-end p-2 " type="password" name="password" id="password" placeholder="Password..."  required/>
                        </div>
                        <div>
                            <label htmlFor="phone">Phone Number</label>
                            <input onChange={onInputChange} value={user.phone} class="flex justify-end p-2 " type="text" name="phone" id="phone" placeholder="Phone number..."  required/>
                        </div>
                        <div class="">
                            <label htmlFor="role">Admin</label>
                            <select onChange={onInputChange} value={user.role} name="role" id="role" required>
                                <option value="customer ">Customer</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <div class="flex justify-center">
                            <button onClick={() => params.id ? updateUserHandler() : addUserHandler()} class="bg-green-300 px-4 py-2 rounded-lg">Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}