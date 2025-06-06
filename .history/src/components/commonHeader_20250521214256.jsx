import React from "react";
import { Button, Layout, Menu, theme } from "antd";

const { Header, Sider, Content } = Layout;
function commonHeader(props) {
    return (
        <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
                type="text"
                style={{
                    fontSize: "16px",
                    width: 64,
                    height: 64,
                }}
            />
        </Header>
    );
}

export default commonHeader;
