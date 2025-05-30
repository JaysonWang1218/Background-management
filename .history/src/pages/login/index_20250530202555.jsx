import React from "react";
import { Form, Input, Button, message } from "antd";
import "./login.css";
import { getMenu } from "../../api/index.jsx";
import { useNavigate } from "react-router-dom";

const login = () => {
    const navigate = useNavigate();
  const handleSubmit = (val) => {
    if (!val.username || !val.password) {
      return message.open({
        type: "warning",
        content: "请输入账号和密码",
      });
    }
    getMenu(val).then((data) => {
      console.log(data);
      localStorage.setItem('token', data.data.token);
    });
  };
  return (
    <Form className="login-container" onFinish={handleSubmit}>
      <div className="login_title">系统登录</div>
      <Form.Item name="username" label="账号">
        <Input placeholder="请输入账号" />
      </Form.Item>
      <Form.Item name="password" label="密码">
        <Input.Password placeholder="请输入密码" />
      </Form.Item>
      <Form.Item className="login-button">
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default login;
