import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import logoImg from "../img/logo.png";
import { Card, Form, Input, Logo, Button } from "../components/AuthForm";
import { useAuth } from "../context/auth";

function Login() {
  const [isLogginedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function postLogin() {
    axios
      .post("http://localhost:8080/login", {
        email,
        password,
      })
      .then((result) => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setIsLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch((e) => {
        console.log(e);
        setIsError(true);
      });
  }
  if (isError) {
    console.log(isError);
  }

  if (isLogginedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Card>
      <Logo src={logoImg} />
      <Form>
        <Input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      <Link to="/register">{"Don't have an account"}</Link>
    </Card>
  );
}

export default Login;
