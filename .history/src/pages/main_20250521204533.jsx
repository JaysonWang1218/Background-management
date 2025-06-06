import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import CommonAside from '../components/commonAside.jsx';

const { Header, Sider, Content } = Layout;
const Main = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout className="main-container">
            {/* <Sider trigger={null} collapsible collapsed={collapsed}>
                <h3 className="app-name">通用后台管理系统</h3>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    style={{ height: "100%" }}
                    items={[
                        {
                            key: "1",
                            icon: <UserOutlined />,
                            label: "nav 1",
                        },
                        {
                            key: "2",
                            icon: <VideoCameraOutlined />,
                            label: "nav 2",
                        },
                        {
                            key: "3",
                            icon: <UploadOutlined />,
                            label: "nav 3",
                        },
                    ]}
                />
            </Sider> */}
            <CommonAside/>
            <Layout>
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
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};
export default Main;
