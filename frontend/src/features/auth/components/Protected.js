import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";
import { selectLoggedInUser } from "../authSlice";

function ProtectedRoute({ element: Element, ...rest }) {
    const user = useSelector(selectLoggedInUser);

    if (!user) {
      return <Navigate to="/login" replace />;
    }
  
    return <Route {...rest} element={<Element />} />;
}

export default ProtectedRoute;