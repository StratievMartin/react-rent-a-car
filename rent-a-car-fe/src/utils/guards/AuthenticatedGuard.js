import { Navigate } from 'react-router-dom';
import { getLoggedUser } from '../../utils/localStorage/UserLocalStorage';

export const AuthenticatedGuard = ({ children }) => {
  const user = getLoggedUser();

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};
