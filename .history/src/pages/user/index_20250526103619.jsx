import React from "react";
import { Button } from "antd";
import "../../css/user.css";

const User = () => {
  return (
    <div className="user">
      <div className="flex-box"><Button type="primary" onClick={handleClick}></Button></div>
    </div>
  );
};

export default User;
