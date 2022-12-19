import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserAuthContext } from "../../pages/Paginas";

const PATHNAMES_NOT_PROTECTED = ["/", "/login", "/signup"];

const ProtectedRoutes = ({ children }) => {
  const { user } = useContext(UserAuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!PATHNAMES_NOT_PROTECTED.includes(location.pathname)) {
      if (user === null) {
        navigate("/login");
      }
    }
  }, [navigate, user, location.pathname]);

  return children;
};

export default ProtectedRoutes;