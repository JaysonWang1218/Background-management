import React from "react";
import { Form } from "antd";

const login = () => {
  const handleSubmit = () => {};
  return (
    <Form className="login-container" onFinish={handleSubmit}>
      <div className="login_title">系统登录</div>
    </Form>
  );
};

export default login;
