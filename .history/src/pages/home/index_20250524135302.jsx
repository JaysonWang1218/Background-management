import React, { useEffect ,useState} from "react";
import "./home.css";
import { Col, Row ,Card,Table} from 'antd';
import {getData} from '../../api/index';
const Home = () => {
    const userImg=require('../../assets/images/user.png');
    useEffect(() => {
        getData().then(({data}) => {
            console.log(data,'res');
        });
    },[]);
    //定义table数据
    const [tableData,setTableData]=useState([]);
    return (
        <Row className="home">
            <Col span={8}>
                    <Card>
                        <div className="user">
                            <img src={userImg}/>
                            <div className="userInfo">
                                <p className="name">Admin</p>
                                <p className="acess">超级管理员</p>
                            </div>
                        </div>
                        <div className="login-info">
                            <p>上次登录时间：<span>2021-7-19</span></p>
                            <p>上次登录地点：<span>武汉</span></p>
                        </div>
                    </Card>
                    <Table dataSource={tableData}/>
            </Col>
            <Col span={16}></Col>
        </Row>
    )
};

export default Home;
