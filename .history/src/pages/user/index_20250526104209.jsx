import React from "react";
import { Button ,Form} from "antd";
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

      </Form>
    </div>
  );
};

export default User;
