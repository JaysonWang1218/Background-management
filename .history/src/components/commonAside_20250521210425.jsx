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



//动态获取icon
const iconToElement = (name) => React.createElement(Icons[name]);

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



const commonAside = () => {
    return (
        <Sider trigger={null} collapsible>
            <h3 className="app-name">通用后台管理系统</h3>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["1"]}
                style={{ height: "100%" }}
                items={items}
            />
        </Sider>
    );
};

export default commonAside;
