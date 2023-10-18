import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const ProtectedRoutes = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
    console.log('user is:',user);
    console.log('children is:',children);

    if (loading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default ProtectedRoutes;