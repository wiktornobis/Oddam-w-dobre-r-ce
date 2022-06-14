import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import WhatIs from './components/pages/WhatIs';
import AbouUs from './components/pages/AbouUs';
import Contact from './components/pages/Contact';
import ThreeColumns from './components/threeColumns/ThreeColumns';



function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} exact/>
            <Route path='o-co-chodzi' element={<WhatIs />} />
            <Route path='fundacja' element={<ThreeColumns />} />
            <Route path='o-nas' element={<AbouUs />} />
            <Route path='kontakt' element={<Contact />} />
        
        </Routes>
        
    </Router>

);
}

export default App;
