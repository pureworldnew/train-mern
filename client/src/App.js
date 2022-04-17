import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./helpers";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { AuthContext } from "./context/auth";
import PrivateRoute from "./PrivateRoute";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// setup fake backend
import { configureFakeBackend } from "./helpers";
configureFakeBackend();

function App() {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <Provider store={store}>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home Page</Link>
              </li>
              <li>
                <Link to="/admin">Admin Page</Link>
              </li>
            </ul>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route
                path="/admin"
                element={
                  <PrivateRoute>
                    <Admin />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </Router>
      </AuthContext.Provider>
    </Provider>
  );
}

export default App;
