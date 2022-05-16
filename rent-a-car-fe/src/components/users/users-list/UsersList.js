import { useState, useEffect } from "react"
import { getAllUsers } from "../../../utils/http-utils/user-requests"

export const UsersList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers()
            .then((res) => {
                console.log(res.data)
                setUsers(res.data)
            })
    }, [])

    return (
        <div>
            {users && users.map(user =>
                <div key={user.id}>{user.fullName}</div>)}
        </div>
    )
}