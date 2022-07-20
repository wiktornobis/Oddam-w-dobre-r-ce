import { Navigate } from 'react-router-dom';
import { UserAuth } from './context/Auth.Context';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to='/zaloguj' />;
  }
  return children;
};

export default ProtectedRoute;