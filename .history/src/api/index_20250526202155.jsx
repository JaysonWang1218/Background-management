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

export const addUser=(data)=>{
  return http.request({
    url:"/user/addUser",
    method:"post",
    data
  })
}
