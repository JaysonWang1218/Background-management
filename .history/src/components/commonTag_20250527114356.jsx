import React from "react";
import { Tag, Space } from "antd";
import "../css/commonTag.css";
import { useSelector } from "react-redux";
const CommonTag = () => {
  const tabList = useSelector((state) => state.tab.tabList);
  const currentMenu = useSelector((state) => state.tab.currentMenu);
  const setTag =(flag,item,index)=>{
    flag?<Tag key={item.key} color="#55acee" onClose={handleClose}>
    {item.label}
  </Tag>
  }
  const handleClose = () => {
    console.log(tabList);
  };
  return (
    <Space wrap={[0, 8]} className="common-tag">
      {currentMenu &&
        tabList.map((item, index)=>setTag(item.key===currentMenu.key,item,index))}
    </Space>
  );
};

export default CommonTag;
