import React from "react";
import { Tag, Space } from "antd";
import "../css/commonTag.css";
import { useSelector } from "react-redux";
const CommonTag = () => {
  const tabList = useSelector((state) => state.tab.tabList);
  const currentMenu = useSelector((state) => state.tab.currentMenu);
  //点击tag
  const handleChange = (tag) => {};
  const setTag = (flag, item, index) => {
    return flag ? (
      <Tag key={item.key} color="#55acee" onClose={handleClose(index)}>
        {item.label}
      </Tag>
    ) : (
      <Tag key={item.key}>{item.label}</Tag>
    );
  };
  const handleClose = () => {
    console.log(tabList);
  };
  return (
    <Space wrap={[0, 8]} className="common-tag">
      {currentMenu &&
        tabList.map((item, index) => {
          //判断是否是当前菜单
          if (item.name === currentMenu.name) {
            return setTag(true, item, index);
          } else {
            return setTag(false, item, index);
          }
        })}
    </Space>
  );
};

export default CommonTag;
