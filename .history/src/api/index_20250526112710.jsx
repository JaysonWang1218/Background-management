import { parseAxisModelMinMax } from "echarts/types/src/coord/scaleRawExtentInfo.js";
import http from "./axios.jsx";
export const getData = () => {
  return http.request({
    url: "/home/getData",
    method: "get",
  });
};
export const getUser = (params) => {
  return http.request({
    url: "/user/getUser",
    method: "get",
    params,
  });
};
