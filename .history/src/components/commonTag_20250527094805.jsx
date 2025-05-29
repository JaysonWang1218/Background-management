import React from "react";
import { Tag, Space } from "antd";
import "../css../commonTag.css";
const commonTag = () => {
  return (
    <Space wrap={[0, 8]} className="common-tag">
      <Tag>Tag1</Tag>
      <Tag closeIcon onClose={preventDefault}>
        Prevent Default
      </Tag>
    </Space>
  );
};

export default commonTag;
