import React, { useState } from "react";
import { Link } from "react-router-dom";

import logoImg from "../img/logo.png";
import { Card, Form, Logo, Button, Input } from "../components/AuthForm";

function Login() {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <Card>
      <Logo src={logoImg} />
      <Form name="form">
        <Input
          type="email"
          placeholder="email"
          value={value}
          onChange={handleChange}
        />

        <Button>Login</Button>
        <Link to="/register">{"Don't have an account"}</Link>
      </Form>
    </Card>
  );
}

export default Login;
