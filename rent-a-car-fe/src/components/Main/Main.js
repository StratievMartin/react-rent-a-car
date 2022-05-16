import { Route, Routes } from "react-router-dom"
import { Header } from "../header/Header"

export const Main = () => {
   return (
      <>
         <Routes>
            <Route path="/home" element={Header} />
         </Routes>
      </>
   )
}