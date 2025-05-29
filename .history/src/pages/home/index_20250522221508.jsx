import React from "react";
import "./home.css";
import { Col, Row ,Card} from 'antd';
const Home = () => {
    const userImg=require('../../assets/images/user.png');
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
                    </Card>
            </Col>
            <Col span={16}></Col>
        </Row>
    )
};

export default Home;
