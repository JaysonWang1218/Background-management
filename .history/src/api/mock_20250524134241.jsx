import Mock from 'mockjs';
import homeApi from './mockServeData/home.jsx';
import home from './mockServeData/home.jsx';

//创建第一个拦截接口
Mock.mock(/home\/getData/, homeApi.getStatisticalData);