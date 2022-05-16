import "./header.scss"
import { Link } from "react-router-dom"
export const Header = () => {
   return (
      <>
         <h2 className="header">Header</h2>
         <Link to="/users-list">Users list</Link>
      </>
   )
}