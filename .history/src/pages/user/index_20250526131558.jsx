import React, {useEffect,useState}from "react";
import { Button, Form, Input ,Table,Popconfirm} from "antd";
import "../../css/user.css";
import { getUser } from "../../api/index.jsx";

const User = () => {
  const [listData,setListData]=useState({
    name:' ',
  });
  const [tableData,setTableData]=useState([]);
  //新增
  const handleClick = (type,rowData) => {
    
  };
  //提交
  const handleFinish = (e) => {
    setListData({
      name:e.name,
    });
  };
  const getTableData =  () => {
    getUser().then((data) => { 
      setTableData(data.list)
    })
  };
  const columns=[
    {title:'姓名',dataIndex:'name'},
    {title:'年龄',dataIndex:'age'},
    {title:'性别',dataIndex:'sex',render:(val)=>val?'女':'男'},
    {title:'出生日期',dataIndex:'birth'},
    {title:'地址',dataIndex:'addr'},
    {title:'操作',render:(rowData)=>{
      return(
        <div className="flex-box">
          <Button type="primary" style={{marginRight:'5px'}} onClick={()=>handleClick('edit',rowData)}>编辑</Button>
          <Button type="primary">删除</Button>
        </div>
      )
    }},
  ]
  useEffect(() => {
    //调用后端接口获取数据
    getTableData();
  }, []);
  return (
    <div className="user-user">
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
      <Table columns={columns} rowKey={'id'} dataSource={tableData}></Table>
    </div>
  );
};

export default User;
