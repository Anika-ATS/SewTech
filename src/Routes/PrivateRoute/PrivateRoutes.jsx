/* eslint-disable react/prop-types */
import LoadingSpinner from "../../Components/Home/LoadingSppiner";
import useAuth from "../../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace />;
};
export default PrivateRoutes;
