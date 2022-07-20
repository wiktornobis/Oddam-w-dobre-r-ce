import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import FormMobile from './components/contact/FormMobile';

import './App.scss';
import { AuthContextProvider } from "./context/Auth.Context";
import ProtectedRoute from "./ProtectedRoute";
import OddajRzeczy from "./components/returnForm/OddajRzeczy";

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/zaloguj' element={<Login />} />
          <Route path='/rejestracja' element={<Registration />} />    
          <Route path='/formularz-mobile' element={<FormMobile />} />    
          <Route path='/oddaj-rzeczy' 
                  element={
                  <ProtectedRoute>
                    <OddajRzeczy />
                  </ProtectedRoute>
                  } 
          />    
        </Routes>
      </AuthContextProvider>
    </Router>

  );
}

export default App;
