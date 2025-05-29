import React from "react";
import { Button, Layout, Avatar, Dropdown } from "antd";

import { MenuUnfoldOutlined } from "@ant-design/icons";

import "../css/commonHeader.css";
import { } from 'react-redux'

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
    //点击展开收起按钮
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
                onClick={}
            />

            <Dropdown menu={{items}}>
                <Avatar size={36} src={<img src={require("../assets/images/user.png")} />} />
            </Dropdown>
        </Header>
    );
}

export default commonHeader;
