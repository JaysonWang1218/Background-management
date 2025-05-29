import React from "react";
import { Tag, Space } from "antd";
import "../css/commonTag.css";
import { useSelector } from "react-redux";
const commonTag = () => {
  const handleClose = () => {
    console.log("关闭");
  };
  return (
    <Space wrap={[0, 8]} className="common-tag">
      <Tag>首页</Tag>
      <Tag color="#55acee" closeIcon onClose={() => handleClose()}>
        用户列表
      </Tag>
    </Space>
  );
};

export default commonTag;
