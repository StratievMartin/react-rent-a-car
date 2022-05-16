import { Route, Routes } from "react-router-dom"
import { Header } from "../header/Header"
import { UsersList } from "../users/users-list/UsersList"

export const Main = () => {
   return (
      <>
         <Routes>
            <Route path="/users-list" element={<UsersList></UsersList>} />
         </Routes>
      </>
   )
}