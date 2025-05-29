import React from "react";
import { Button, Layout, Avatar, Dropdown } from "antd";

import { MenuUnfoldOutlined } from "@ant-design/icons";

import "../css/commonHeader.css";
import { useDispatch } from 'react-redux'
import {} from '../store/reducers/tab.jsx'

const { Header} = Layout;
 function commonHeader(props) {
    //登出
    const logout = () => {};
    const items = [
        {
            key: "1",
            label: (
                <a target="_blank" rel="noopener noreferrer">
                    个人中心
                </a>
            ),
        },
        {
            key: "2",
            label: (
                <a onClick={() => logout} target="_blank" rel="noopener noreferrer">
                    退出
                </a>
            ),
        },
    ];
    //创建dispatch
    const dispatch=useDispatch();
    //点击展开收起按钮
    const setCollapsed = () => {
        console.log("点击了展开收起按钮");
        dispatch();
    }
    return (
        <Header className="header-container">
            <Button
                icon={<MenuUnfoldOutlined />}
                type="text"
                style={{
                    fontSize: "16px",
                    width: 64,
                    height: 32,
                    background: "#fff",
                }}
                onClick={()=>setCollapsed()}
            />

            <Dropdown menu={{items}}>
                <Avatar size={36} src={<img src={require("../assets/images/user.png")} />} />
            </Dropdown>
        </Header>
    );
}

export default commonHeader;
