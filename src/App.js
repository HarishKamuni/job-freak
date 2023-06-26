import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeftPanel from "./Components/LeftPanel/LeftPanel";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Info from "./Components/Info/Info";
import Guide from "./Components/Guide/Guide";
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      
        
        <LeftPanel />
        
          
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/info" element={<Info />} />
            <Route path="/guide" element={<Guide/>} />
          </Routes>
          
      
    </BrowserRouter>
  );
}

export default App;
