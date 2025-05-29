import Mock from "mockjs";
import homeApi from "./mockServeData/home.js";
import home from "./mockServeData/home.js";
import userApi from "./mockServeData/user.js";

//创建第一个拦截接口
Mock.mock(/home\/getData/, homeApi.getStatisticalData);
Mock.mock(/user\/getUser/, userApi.getUserList);


Mock.mock(/user\/addUser/, userApi.createUser);
Mock.mock(/user\/getUser/, userApi.updateUser);