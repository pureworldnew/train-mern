import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { userActions } from "../actions";

import logoImg from "../img/logo.png";
import { Card, Form, Input, Logo, Button, Error } from "../components/AuthForm";
import Spinner from "../components/Spinner";

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const { email, password } = inputs;

  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const dispatch = useDispatch();
  const location = useLocation();

  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (email && password) {
      // get return url from location state or default to home page
      const { from } = location.state || { from: { pathname: "/" } };
      dispatch(userActions.login(email, password, from));
    }
  }

  return (
    <Card>
      <Logo src={logoImg} />
      <Form name="form" onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleChange}
        />
        {submitted && !email && <Error>Email is required</Error>}
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />
        {submitted && !password && <Error>Password is required</Error>}
        <Button>
          {loggingIn && <Spinner />}
          Login
        </Button>
        <Link to="/register">{"Don't have an account"}</Link>
      </Form>
    </Card>
  );
}

export default Login;
