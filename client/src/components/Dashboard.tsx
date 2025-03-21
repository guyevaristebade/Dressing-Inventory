import { useState } from "react";
import { Menu, Layout, FloatButton, Button } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import StatCard from "./StatCard";

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Layout className="min-h-screen">
      {/* Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        className="bg-gray-800 h-screen flex items-center text-white"
      >
        <div className="logo text-center text-white ">
          <h3 className="text-white text-3xl pb-10">Dressy</h3>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/dashboard">Accueil</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/profile">Mon Profil</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            Paramètres
          </Menu.Item>
        </Menu>
      </Sider>

      {/* Main Content */}
      <Layout>
        <Header className="bg-gray-900 text-white p-4">
          <div className="flex justify-between items-center">
            <div className="text-xl text-white">
              Bienvenue dans votre Dashboard
            </div>
            <div>
              <Button className="bg-blue-600 text-white">Se déconnecter</Button>
            </div>
          </div>
        </Header>

        {/* Main Section */}
        <Content className="p-6 bg-gray-100 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard
              title="Vêtements"
              value="150"
              description="Vêtements dans votre garde-robe"
              color="bg-blue-600"
            />
            <StatCard
              title="Chaussures"
              value="30"
              description="Chaussures disponibles"
              color="bg-green-600"
            />
            <StatCard
              title="Accessoires"
              value="50"
              description="Accessoires dans votre collection"
              color="bg-yellow-600"
            />
            <StatCard
              title="Derniers Vêtements Ajoutés"
              value="3"
              description="Nouveaux vêtements ajoutés"
              color="bg-gray-700"
            />
          </div>
        </Content>
        <FloatButton icon={<PlusOutlined />} />
      </Layout>
    </Layout>
  );
};

export default Dashboard;
