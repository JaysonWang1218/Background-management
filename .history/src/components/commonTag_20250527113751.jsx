import React from "react";
import { Tag, Space } from "antd";
import "../css/commonTag.css";
import { useSelector } from "react-redux";
const CommonTag = () => {
  const tabList = useSelector((state) => state.tab.tabList);
  const currentMenu = useSelector((state) => state.tab.currentMenu);
  console.log(tabList);
  const handleClose = () => {
    console.log(tabList);
  };
  return (
    <Space wrap={[0, 8]} className="common-tag">
      {currentMenu &&
        tabList.map((item) => (
          <Tag key={item.key} closable onClose={handleClose} style={{ marginRight: 8 }} className="common-tag">
            {item.label}
          </Tag>
        ))}
    </Space>
  );
};

export default CommonTag;
