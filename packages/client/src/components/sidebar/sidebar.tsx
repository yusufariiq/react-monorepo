"use client"
import { Layout, Menu } from "antd"
import {
  FileTextOutlined,
  HomeOutlined,
  CreditCardOutlined,
  BarChartOutlined,
  FileOutlined,
  SettingOutlined,
} from "@ant-design/icons"
import "./sidebar.scss"

const { Sider } = Layout

export default function Sidebar() {
  return (
    <Sider className="sidebar" width={150}>
      <div className="logo">
        <span>eTravel</span>
      </div>
      <Menu
        mode="vertical"
        className="sidebar-menu"
        items={[
          {
            key: "1",
            icon: <FileTextOutlined />,
            label: "My Approval",
          },
          {
            key: "2",
            icon: <HomeOutlined />,
            label: "Pengajuan",
          },
          {
            key: "3",
            icon: <HomeOutlined />,
            label: "My Tickets",
          },
          {
            key: "4",
            icon: <CreditCardOutlined />,
            label: "Payment",
          },
          {
            key: "5",
            icon: <BarChartOutlined />,
            label: "Report",
          },
          {
            key: "6",
            icon: <FileOutlined />,
            label: "Import SPPD",
          },
          {
            key: "7",
            icon: <SettingOutlined />,
            label: "Konfigurasi",
            className: "active-menu-item",
          },
        ]}
      />
    </Sider>
  )
}
