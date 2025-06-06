import React from "react";
import { Button, Form, Input } from "antd";
import "../../css/user.css";

const User = () => {
  //新增
  const handleClick = (type) => {
    console.log(type);
  };
  //提交
  const handleFinish = (e) => {
    console.log(e);
  };
  return (
    <div className="user">
      <div className="flex-box">
        <Button type="primary" onClick={() => handleClick("add")}>
          新增
        </Button>
      </div>
      <Form layout="inline" onFinish={handleFinish}>
        <Form.Item name="keyword">
          <Input palaceholder="请输入用户名" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default User;
