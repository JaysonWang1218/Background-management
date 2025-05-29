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
  // ... existing code ...
  const handleChange = (tag) => {
    console.log("tag:", tag);
    // 使用setTimeout将状态更新推迟到渲染完成后
    setTimeout(() => {
      let length = tabList.length - 1;
      dispatch(closeTab(tag));
      // 如果当前菜单是最后一个标签，则选择倒数第二个标签
      if (tag.name === currentMenu.name) {
        dispatch(selectMenuList(tabList[length]));
      }
    });
  };
  // ... existing code ...
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
      {currentMenu.name && tabList.map((item, index) => setTag(item.name === currentMenu.name, item, index))}
    </Space>
  );
};

export default CommonTag;
