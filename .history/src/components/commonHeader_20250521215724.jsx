import React from "react";
import { Button, Layout, Avatar } from "antd";


import { MenuUnfoldOutlined } from "@ant-design/icons";

import '../css/commonHeader.css';

const { Header, Sider, Content } = Layout;
function commonHeader(props) {
    return (
        <Header className="header-container">
            <Button
            icon={<MenuUnfoldOutlined />}
                type="text"
                style={{
                    fontSize: "16px",
                    width: 64,
                    height: 64,
                }}
            />
            <Avatar src={<img src={require("../assets/images/user.png")}/>}/>
        </Header>
    );
}

export default commonHeader;
