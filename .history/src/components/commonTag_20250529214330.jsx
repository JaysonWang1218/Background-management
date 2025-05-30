import React from "react";
import { Tag, Space } from "antd";
import "../css/commonTag.css";
import { useSelector, useDispatch } from "react-redux";
import { closeTab, selectMenuList } from "../store/reducers/tab.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const CommonTag = () => {
  const tabList = useSelector((state) => state.tab.tabList);
  const currentMenu = useSelector((state) => state.tab.currentMenu);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = (tag) => {
    dispatch(closeTab(tag));
    // 如果关闭的是当前标签，导航到前一个标签
    if (tag.name === currentMenu.name) {
      const index = tabList.findIndex((item) => item.name === tag.name);
      const prevTab = tabList[Math.max(0, index - 1)];
      if (prevTab) {
        navigate(prevTab.path);
      }
    }
  };

  const handleChange = (tag) => {
    navigate(tag.path);
  };

  const setTag = (flag, item, index) => {
    return flag ? (
      <Tag
        key={item.name}
        closable
        color={item.path === currentMenu.path ? "#55acee" : undefined}
        onClose={() => handleClose(item)}
      >
        {item.label}
      </Tag>
    ) : (
      <Tag
        key={item.name}
        onClick={() => handleChange(item)}
        color={item.path === currentMenu.path ? "#55acee" : undefined}
      >
        {item.label}
      </Tag>
    );
  };

  return (
    <Space wrap={[0, 8]} className="common-tag">
      {tabList.map((item, index) => setTag(item.path === currentMenu.path, item, index))}
    </Space>
  );
};

export default CommonTag;
