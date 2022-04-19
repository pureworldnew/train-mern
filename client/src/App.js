import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { history } from "./helpers";
import { AuthContext } from "./context/auth";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import PrivateRoute from "./PrivateRoute";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// setup fake backend
import { configureFakeBackend } from "./helpers";
import { alertActions } from "./actions";
configureFakeBackend();

function App() {
  const [authTokens, setAuthTokens] = useState();
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen(() => {
      //clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router history={history}>
        <div>
          <ul>
            <li>
              <Link to="/">Home Page</Link>
            </li>
            <li>
              <Link to="/admin">Admin Page</Link>
            </li>
          </ul>
          {alert.message && <div>{alert.message}</div>}
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
  );
}

export default App;
