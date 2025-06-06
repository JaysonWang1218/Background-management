import React, { useEffect, useState } from "react";
import { Button, Form, Input, Table, Popconfirm, Modal, InputNumber, Select, DatePicker } from "antd";
import "../../css/user.css";
import { getUser, addUser, editUser ,delUser} from "../../api/index.jsx";
import dayjs from "dayjs";

const User = () => {
  const [listData, setListData] = useState({
    name: "",
  });
  const [tableData, setTableData] = useState([]);
  //0新增，1编辑
  const [modalType, setModalType] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  //创建form实例
  const [form] = Form.useForm();
  //新增
  const handleClick = (type, rowData) => {
    setIsModalOpen(!isModalOpen);
    if (type === "add") {
      setModalType(0);
    } else {
      setModalType(1);
      const cloneData = JSON.parse(JSON.stringify(rowData));
      cloneData.birth = dayjs(cloneData.birth);
      form.setFieldsValue(cloneData);
    }
  };
  //提交
  const handleFinish = (e) => {
    setListData({
      name: e.keyword,
    });
  };
  useEffect(() => {
    getTableData()
  }, [listData]);
  //删除
  const handleDelete = ({id}) => {
    delUser({id}).then(() => {
      getTableData();
    })
  };
  const getTableData = () => {
    getUser().then((data) => {
      setTableData(data.list);
    });
  };
  //弹窗确定事件
  const handleOk = () => {
    //表单校验
    form
      .validateFields()
      .then((values) => {
        console.log(values);
        //日期
        values.birth = dayjs(values.birth).format("YYYY-MM-DD");

        //调后端接口
        if (modalType) {
          //编辑
          editUser(values).then(() => {
            handleCancel();
            getTableData();
          });
        } else {
          //新增
          addUser(values).then(() => {
            handleCancel();
            getTableData();
          });
        }
        form.resetFields();
      })
      .catch((err) => {
        console.log(err);
      });
    setIsModalOpen(false);
  };
  //弹窗取消事件
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const columns = [
    { title: "姓名", dataIndex: "name" },
    { title: "年龄", dataIndex: "age" },
    { title: "性别", dataIndex: "sex", render: (val) => (val ? "女" : "男") },
    { title: "出生日期", dataIndex: "birth" },
    { title: "地址", dataIndex: "addr" },
    {
      title: "操作",
      render: (rowData) => {
        return (
          <div>
            <Button style={{ marginRight: "5px" }} onClick={() => handleClick("edit", rowData)}>
              编辑
            </Button>
            <Popconfirm
              title="提示"
              description="此操作将删除该用户，是否继续？"
              okText="确认"
              cancelText="取消"
              onConfirm={() => handleDelete(rowData)}
            >
              <Button type="primary" danger>
                删除
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];
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
      <Table columns={columns} rowKey={"id"} dataSource={tableData}></Table>
      <Modal
        title={modalType ? "编辑用户" : "新增用户"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确认"
        cancelText="取消"
      >
        <Form form={form} labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} labelAlign="left">
          {modalType && (
            <Form.Item name="id" hidden>
              <Input />
            </Form.Item>
          )}
          <Form.Item label="姓名" name="name" rules={[{ required: true, message: "请输入姓名" }]}>
            <Input placeholder="请输入姓名" />
          </Form.Item>
          <Form.Item
            label="年龄"
            name="age"
            rules={[
              { required: true, message: "请输入年龄" },
              {
                type: "number",
                message: "年龄必须为数字",
              },
            ]}
          >
            <InputNumber placeholder="请输入年龄" />
          </Form.Item>
          <Form.Item label="性别" name="sex" rules={[{ required: true, message: "请输入性别" }]}>
            <Select
              placeholder="请选择性别"
              options={[
                {
                  value: 0,
                  label: "男",
                },
                {
                  value: 1,
                  label: "女",
                },
              ]}
            />
          </Form.Item>
          <Form.Item label="出生日期" name="birth" rules={[{ required: true, message: "请输入出生日期" }]}>
            <DatePicker placeholder="请选择" format={"YYYY-MM-DD"} />
          </Form.Item>
          <Form.Item label="地址" name="addr" rules={[{ required: true, message: "请输入地址" }]}>
            <Input placeholder="请输入地址" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default User;
