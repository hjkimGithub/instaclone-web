import { useState } from "react";
import {BrowserRouter as Router, Route, Navigate, Routes} from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
// import NotFound from "./screens/NotFound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div> 
      <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? 
            <Home setIsLoggedIn = {setIsLoggedIn}/> : 
            <Login setIsLoggedIn = {setIsLoggedIn}/>} 
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
