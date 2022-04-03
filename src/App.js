import { useReactiveVar } from "@apollo/client";
// import { useState } from "react";
import {BrowserRouter as Router, Route, Navigate, Routes} from "react-router-dom";
import { isLoggedInVar, darkModeVar } from "./apollo";
import { ThemeProvider } from "styled-components";
import Home from "./screens/Home";
import Login from "./screens/Login";
// import NotFound from "./screens/NotFound";

const lightTheme = {
  fontColor: "#2c2c2c",
  bgColor: "lightgray",
};

const darkTheme = {
  fontColor: "lightgray",
  bgColor: "#2c2c2c",
};

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <div>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}> 
      <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home/> : <Login />}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
