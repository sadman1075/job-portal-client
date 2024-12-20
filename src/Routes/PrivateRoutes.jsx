import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Pages/Loader/Loader";

const PrivateRoutes = ({ children }) => {
    const { user,loading } = useContext(AuthContext)
    const location=useLocation(); 

    if(loading){
        return <Loader></Loader>
    }

    if (user) {
        return children;

    }
    return <Navigate state={location?.pathname} to={"/login"}></Navigate>
};

export default PrivateRoutes;