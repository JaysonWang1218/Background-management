import React, {useEffect,useState}from "react";
import { Button, Form, Input ,Table} from "antd";
import "../../css/user.css";
import { getUser } from "../../api/index.jsx";

const User = () => {
  const [listData,setListData]=useState({
    name:' ',
  });
  const [tableData,setTableData]=useState([]);
  //新增
  const handleClick = (type) => {
    console.log(type);
  };
  //提交
  const handleFinish = (e) => {
    setListData({
      name:e.name,
    });
  };
  const getTableData =  () => {
    getUser().then(({data}) => { 
      setTableData(data.list)
    })
  };
  useEffect(() => {
    //调用后端接口获取数据
    getTableData();
  }, []);
  return (
    <div className="user">
      <div className="flex-box">
        <Button type="primary" onClick={() => handleClick("add")}>
          新增
        </Button>
        <Form layout="inline" onFinish={handleFinish}>
          <Form.Item name="keyword">
            <Input placeholder="请输入用户名" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Table columns={} rowKey={'id'} dataSource={tableData}></Table>
    </div>
  );
};

export default User;
