import React, {useEffect}from "react";
import { Button, Form, Input } from "antd";
import "../../css/user.css";
import { useEffect } from "react";

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
        <Form layout="inline" onFinish={handleFinish}>
          <Form.Item name="keyword">
            <Input placeholder="请输入用户名" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default User;
