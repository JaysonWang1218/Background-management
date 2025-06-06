import React, { useEffect, useState } from "react";
import "./home.css";
import { Col, Row, Card, Table } from "antd";
import { getData } from "../../api/index.jsx";
import * as Icon from "@ant-design/icons";
import * as echarts from "echarts";

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

//动态获取icon
const iconToElement = (name) => React.createElement(Icon[name]);
const Home = () => {
    const userImg = require("../../assets/images/user.png");
    useEffect(() => {
        getData().then(({ data }) => {
            console.log(data, "res");
            const tableData = data.tableData;
            setTableData(tableData);
        });

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById("main"));
        // 绘制图表
        myChart.setOption({
            title: {
                text: "ECharts 入门示例",
            },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
            },
            yAxis: {},
            series: [
                {
                    name: "销量",
                    type: "bar",
                    data: [5, 20, 36, 10, 10, 20],
                },
            ],
        });
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
                <Card>
                    <Table rowKey={"name"} columns={columns} dataSource={tableData} pagination={false} />
                </Card>
            </Col>
            <Col span={16}>
                <div className="num">
                    {countData.map((item, index) => {
                        return (
                            <Card key={index} className="card-grid">
                                <div className="icon-box" style={{ background: item.color }}>
                                    {iconToElement(item.icon)}
                                </div>
                                <div className="detail">
                                    <p className="value">￥{item.value}</p>
                                    <p className="txt">{item.name}</p>
                                </div>
                            </Card>
                        );
                    })}
                </div>
                <div id="main"></div>
            </Col>
        </Row>
    );
};

export default Home;
