import React from "react";
import { Tag, Space } from "antd";
import "../css/commonTag.css";
import { useSelector, useDispatch } from "react-redux";
import { closeTab, selectMenuList } from "../store/reducers/tab.jsx";
const CommonTag = () => {
  const tabList = useSelector((state) => state.tab.tabList);
  const currentMenu = useSelector((state) => state.tab.currentMenu);
  const dispatch = useDispatch();
  //点击tag
  const handleChange = (tag) => {
    console.log("tag:", tag);
    let length = tabList.length - 1;
    dispatch(closeTab(tag));
    const action = selectMenuList(tabList[length]);
    //如果关闭的是当前菜单，切换到上一个菜单
    if (tag.name === currentMenu.name) {
    }
  };
  //tag的显示
  const setTag = (flag, item, index) => {
    return flag ? (
      <Tag key={item.name} closeIcon color="#55acee" onClose={handleClose(item, index)}>
        {item.label}
      </Tag>
    ) : (
      <Tag key={item.name} onClick={() => handleChange(item)}>
        {item.label}
      </Tag>
    );
  };
  const handleClose = (tag) => {
    console.log(tabList);
    dispatch(closeTab(tag));
  };
  return (
    <Space wrap={[0, 8]} className="common-tag">
      {currentMenu.name && tabList.map((item, index) => setTag(item.key === currentMenu.key, item, index))}
    </Space>
  );
};

export default CommonTag;
