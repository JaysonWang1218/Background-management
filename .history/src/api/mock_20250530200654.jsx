import Mock from "mockjs";
import homeApi from "./mockServeData/home.js";
import userApi from "./mockServeData/user.js";
import permissionApi from "./mockServeData/permission.js";

//创建第一个拦截接口
Mock.mock(/home\/getData/, homeApi.getStatisticalData);
Mock.mock(/user\/getUser/, userApi.getUserList);

Mock.mock(/user\/addUser/, userApi.createUser);
Mock.mock(/user\/editUser/, userApi.updateUser);
Mock.mock(/user\/delUser/, userApi.deleteUser);
Mock.mock(/permission\/getMenu/, "post", permissionApi.getMenu);
