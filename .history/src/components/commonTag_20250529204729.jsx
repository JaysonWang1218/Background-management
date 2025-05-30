import React from "react";
import { Tag, Space } from "antd";
import "../css/commonTag.css";
import { useSelector, useDispatch } from "react-redux";
import { closeTab, selectMenuList } from "../store/reducers/tab.jsx";
import { useLocation } from "react-router-dom";
const CommonTag = () => {
  const tabList = useSelector((state) => state.tab.tabList);
  const currentMenu = useSelector((state) => state.tab.currentMenu);
  const dispatch = useDispatch();
  //点击tag

  const handleChange = (tag) => {
    console.log("tag:", tag);
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
  const action = useLocation();
  const handleClose = (tag) => {
    console.log(tabList);
    // 由于当前仅注释了这行代码，无法直接判断其导致只渲染首页 tag 的原因。
    // 推测可能是 closeTab action 影响了 tabList 的状态，从而影响渲染。
    // 这里先取消注释并添加一些调试信息，查看关闭标签时状态变化。
    console.log("准备执行 closeTab action，传入的 tag:", tag);
    dispatch(closeTab(tag));
  };
  return (
    <Space wrap={[0, 8]} className="common-tag">
      {currentMenu.name && tabList.map((item, index) => setTag(item.name === currentMenu.name, item, index))}
    </Space>
  );
};

export default CommonTag;
