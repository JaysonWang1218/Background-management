import React from "react";
import { Form, Input } from "antd";

const login = () => {
  const handleSubmit = () => {};
  return (
    <Form className="login-container" onFinish={handleSubmit}>
      <div className="login_title">系统登录</div>
      <Form.Item name="username" label="账号">
        <Input type="text" placeholder="请输入账号" />
      </Form.Item>
      <Form.Item name="password" label="密码">
        <Input.Password type="password" placeholder="请输入密码" />
      </Form.Item>
      <Form.Item>
        <button className="login_btn" type="primary">
          登录
        </button>
      </Form.Item>
    </Form>
  );
};

export default login;
