import React from "react";
import { Button ,Form} from "antd";
import "../../css/user.css";

const User = () => {
  const handleClick = (type) => {
    console.log(type);
  };
  return (
    <div className="user">
      <div className="flex-box"><Button type="primary" onClick={()=>handleClick('add')}>新增</Button></div>
    </div>
  );
};

export default User;
