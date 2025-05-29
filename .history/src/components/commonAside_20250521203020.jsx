import React from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";

const { Header, Sider, Content } = Layout;
function commonAside(props) {
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
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
        </Sider>
    );
}

export default commonAside;
