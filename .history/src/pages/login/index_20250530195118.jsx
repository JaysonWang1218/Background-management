import React from "react";
import { Form, Input } from "antd";

const login = () => {
  const handleSubmit = () => {};
  return (
    <Form className="login-container" onFinish={handleSubmit}>
      <div className="login_title">系统登录</div>
      <Form.Item name="username" label="账号">
        <Input type="text" placeholder="请输入用户名" />
      </Form.Item>
    </Form>
  );
};

export default login;
