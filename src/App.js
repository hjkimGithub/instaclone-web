import { useReactiveVar } from "@apollo/client";
// import { useState } from "react";
import {BrowserRouter as Router, Route, Navigate, Routes} from "react-router-dom";
import { isLoggedInVar, darkModeVar } from "./apollo";
import { ThemeProvider } from "styled-components";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NotFound from "./screens/NotFound";
import { darkTheme, GlobalStyles, lightTheme } from "./styles";
import SignUp from "./screens/SignUp";
import routes from "./routes";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  const darkMode = useReactiveVar(darkModeVar);
  return (
    <div>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}> 
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path={routes.home} element={isLoggedIn ? <Home/> : <Login />}/>
          <Route path="*" element={<Navigate to="/" />} />
          {/* {!isLoggedIn ? (
          <Route path="/sign-up">
            <SignUp />
          </Route>): null} */}
          <Route path={routes.signUp} element={!isLoggedIn ? <SignUp /> : <NotFound />}/>
        </Routes>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
