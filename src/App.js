import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} exact/>
            <Route path='/zaloguj' element={<Login />}/>
            <Route path='/rejestracja' element={<Registration />}/>
            
        </Routes>
        
    </Router>

);
}

export default App;
