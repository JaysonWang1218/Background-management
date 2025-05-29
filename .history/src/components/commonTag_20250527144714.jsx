import React from "react";
import { Tag, Space } from "antd";
import "../css/commonTag.css";
import { useSelector } from "react-redux";
const CommonTag = () => {
  const tabList = useSelector((state) => state.tab.tabList);
  const currentMenu = useSelector((state) => state.tab.currentMenu);
  console.log("currentMenu:", currentMenu);
  console.log("tabList:", tabList);
  //点击tag
  const handleChange = (tag) => {
    console.log("tag:", tag);
  };
  //tag的显示
  const setTag = (flag, item, index) => {
    return flag ? (
      <Tag key={item.name} closeIcon color="#55acee" onClose={handleClose(index)}>
        {item.label}
      </Tag>
    ) : (
      <Tag key={item.name}>{item.label}</Tag>
    );
  };
  const handleClose = () => {
    console.log(tabList);
  };
  return (
    <Space wrap={[0, 8]} className="common-tag">
      {currentMenu.name && tabList.map((item, index) => setTag(item.name === currentMenu.name, item, index))}
    </Space>
  );
};

export default CommonTag;
