import { Button, Layout, Table, Tabs } from "components";
import type React from "react"
import { PlusOutlined, EditOutlined, DeleteOutlined} from "@ant-design/icons"
import "./page.scss"
import Sidebar from "../../components/sidebar/sidebar";

const { Content } = Layout;

interface UserProps {
  id: string;
  name: string;
  age: number;
  isMarried?: boolean;
}

const Home: React.FC  = () => {
  const users: UserProps[] = [
    { id: '1', name: 'Alice', age: 30, isMarried: false },
    { id: '2', name: 'Bob', age: 25, isMarried: true },
    { id: '3', name: 'Charlie', age: 35, isMarried: true },
  ]

  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
      width: 60,
      align: 'center' as const
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
      sorter: true,
    },
    {
      title: 'Age',
      dataIndex: 'Age',
      key: 'Age',
      sorter: true,
    },
    {
      title: 'Marital Status',
      dataIndex: 'isMarried',
      key: 'isMarried',
      sorter: true,
    },
    {
      title: '',
      key: 'action',
      width: 60,
      align: 'center' as const,
      render: () => (
        <div className="action-row">
          <Button type="text" icon={<EditOutlined />} className="edit-button" />
          <Button type="text" icon={<DeleteOutlined />} className="delete-button" />
        </div>
      )
    },
  ]

  return (
    <Layout className="konfigurasi-layout">
      <Sidebar/>
      <Layout className="main-layout">
        <div className="header-section">
          <div className="header-content">
            <h1 className="header-title">Konfigurasi</h1>
            <p className="header-subtitle">Daftar User</p>
            <Button type="primary" icon={<PlusOutlined />} className="add-button">
              Tambah User
            </Button>
          </div>
        </div>

        <Content className="content-section">
          <div className="tabs-wrapper">
            <Tabs
              defaultActiveKey="1"
              items={[
                {
                  key: "1",
                  label: "Users",
                  children: null,
                },
                {
                  key: "2",
                  label: "Traveling Group",
                  children: null,
                },
                {
                  key: "3",
                  label: "Alokasi Kuota",
                  children: null,
                },
              ]}
            />
          </div>

          <div className="table-section">
            <Table 
              columns={columns}
              dataSource={users}
              pagination={false}
              className="user-table"
              bordered
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Home;