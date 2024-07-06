
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/Auth/AuthProvider";


const PrivetRouters = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  if (loading) {
    return (
      <>
       <div className="flex justify-center items-center my-52">
       <span className="loading loading-spinner loading-lg"></span>
        <span className="loading loading-spinner loading-lg"></span>
       </div>
      </>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{form:location}} replace></Navigate>;
};

export default PrivetRouters;
