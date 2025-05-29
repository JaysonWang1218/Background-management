import React from "react";
import { Button, Layout, Avatar, Dropdown } from "antd";

import { MenuUnfoldOutlined } from "@ant-design/icons";

import "../css/commonHeader.css";

const { Header, Sider, Content } = Layout;
function commonHeader(props) {
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
                <a onClick={()=>logout}target="_blank" rel="noopener noreferrer">
                    退出
                </a>
            ),
        }
    ];
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
            />
            <Avatar size={36} src={<img src={require("../assets/images/user.png")} />} />
        </Header>
    );
}

export default commonHeader;
