import React from "react";
import { Button, Layout, Avatar } from "antd";

const { Header, Sider, Content } = Layout;
function commonHeader(props) {
    return (
        <Header>
            <Button
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
