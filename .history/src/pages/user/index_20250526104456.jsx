import React from "react";
import { Button ,Form,Input} from "antd";
import "../../css/user.css";

const User = () => {
//新增
  const handleClick = (type) => {
    console.log(type);
  };
  //提交
  const handleFinish = (values) => { 

  };
  return (
    <div className="user">
      <div className="flex-box"><Button type="primary" onClick={()=>handleClick('add')}>新增</Button></div>
      <Form layout="inline" onFinish={}>
      <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input palaceholder="请输入用户名" />
    </Form.Item>
      </Form>
    </div>
  );
};

export default User;
