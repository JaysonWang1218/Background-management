import React, { useEffect, useState } from "react";
import "./home.css";
import { Col, Row, Card, Table } from "antd";
import { getData } from "../../api/index.jsx";

const columns = [
    {
        title: "课程",
        dataIndex: "name",
    },
    {
        title: "今日购买",
        dataIndex: "todayBuy",
    },
    {
        title: "本月购买",
        dataIndex: "monthBuy",
    },
    {
        title: "总购买",
        dataIndex: "totalBuy",
    },
];
const countData = [
    {
        name: "今日支付订单",
        value: 1234,
        icon: "CheckCircleOutlined",
        color: "#2ec7c9",
    },
    {
        name: "今日收藏订单",
        value: 3421,
        icon: "ClockCircleOutlined",
        color: "#ffb980",
    },
    {
        name: "今日未支付订单",
        value: 1234,
        icon: "CloseCircleOutlined",
        color: "#5ab1ef",
    },
    {
        name: "本月支付订单",
        value: 1234,
        icon: "CheckCircleOutlined",
        color: "#2ec7c9",
    },
    {
        name: "本月收藏订单",
        value: 3421,
        icon: "ClockCircleOutlined",
        color: "#ffb980",
    },
    {
        name: "本月未支付订单",
        value: 1234,
        icon: "CloseCircleOutlined",
        color: "#5ab1ef",
    },
];

const Home = () => {
    const userImg = require("../../assets/images/user.png");
    useEffect(() => {
        getData().then(({ data }) => {
            console.log(data, "res");
            const tableData = data.data;
            setTableData(tableData);
        })
    }, []);
    //定义table数据
    const [tableData, setTableData] = useState([]);
    return (
        <Row className="home">
            <Col span={8}>
                <Card>
                    <div className="user">
                        <img src={userImg} />
                        <div className="userInfo">
                            <p className="name">Admin</p>
                            <p className="acess">超级管理员</p>
                        </div>
                    </div>
                    <div className="login-info">
                        <p>
                            上次登录时间：<span>2021-7-19</span>
                        </p>
                        <p>
                            上次登录地点：<span>武汉</span>
                        </p>
                    </div>
                </Card>
                <Table columns={columns} dataSource={tableData} />
            </Col>
            <Col span={16}></Col>
        </Row>
    );
};

export default Home;
