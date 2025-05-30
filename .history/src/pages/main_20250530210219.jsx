import { Outlet } from "react-router-dom";
import { Layout, theme } from "antd";
import CommonAside from "../components/commonAside.jsx";
import CommonHeader from "../components/commonHeader.jsx";
import CommonTag from "../components/commonTag.jsx";
import { useSelector } from "react-redux";
import { RouterAuth } from "../router/routerAuth.jsx";

const { Header, Sider, Content } = Layout;
const Main = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const collapsed = useSelector((state) => state.tab.isCollapse);
  return (
    <Layout className="main-container">
      <CommonAside collapsed={collapsed} />
      <Layout>
        <CommonHeader collapsed={collapsed} />
        <CommonTag />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Main;
