import React from "react";
import "./home.css";
import { Col, Row ,Card} from 'antd';
const Home = () => {
    const userImg=require("../../assets/images/user.png");
    return (
        <Row className="home">
            <Col span={8}>
                <div>
                    <Card>

                    </Card>
                </div>
            </Col>
            <Col span={16}></Col>
        </Row>
    )
};

export default Home;
