import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import FormMobile from './components/contact/FormMobile';

import './App.scss';

function App() {
  return (
    <Router>
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Home />} exact />
                <Route path='/zaloguj' element={<Login />} />
                <Route path='/rejestracja' element={<Registration />} />    
                <Route path='/formularz-mobile' element={<FormMobile />} />    
            </Routes>
        </AuthProvider>
    </Router>

);
}

export default App;
