import Mock from "mockjs";
import homeApi from "./mockServeData/home.js";
import home from "./mockServeData/home.js";

//创建第一个拦截接口
Mock.mock(/home\/getData/, homeApi.getStatisticalData);
