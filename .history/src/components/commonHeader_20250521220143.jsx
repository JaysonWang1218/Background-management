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
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
            ),
        },
        {
            key: "2",
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item (disabled)
                </a>
            ),
            icon: <SmileOutlined />,
            disabled: true,
        },
        {
            key: "3",
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item (disabled)
                </a>
            ),
            disabled: true,
        },
        {
            key: "4",
            danger: true,
            label: "a danger item",
        },
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
