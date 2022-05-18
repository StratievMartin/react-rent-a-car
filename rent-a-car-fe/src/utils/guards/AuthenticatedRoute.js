import { Navigate, useNavigate } from 'react-router-dom';
import { getLoggedUser } from '../http-utils/user-requests';

export const AuthenticatedRoute = (props) => {
    // const navigate = useNavigate();
    const user = getLoggedUser();

    if (!user) {
        return <Navigate to="/login"></Navigate>
    }
    return <props.element {...props} />;
};
