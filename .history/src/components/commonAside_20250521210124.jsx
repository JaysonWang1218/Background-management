import React from "react";
import MenuConfig from "../config/index.jsx";
import Icon, {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";

const { Header, Sider, Content } = Layout;

//处理菜单的数据
const items = MenuConfig.map((icon) => {
    //没有子菜单
    const child ={
        key: icon.path,
        iocn: iconToElement(icon.icon),
        label: icon.label,
    }
    //有子菜单
    if (icon.children) {
        child.children = icon.children.map((item) => ({
            key: item.path,
            iocn: iconToElement(item.icon),
            label: item.label,
        }));
    }
    return child;
})

//动态获取icon
const iconToElement = (name) => React.createElement(Icons[name]);

const commonAside = () => {
    return (
        <Sider trigger={null} collapsible>
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
};

export default commonAside;
