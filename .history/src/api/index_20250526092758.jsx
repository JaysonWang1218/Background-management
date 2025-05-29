import http from "./axios.jsx";
export const getData = () => {
  return http.request({
    url: "/home/getData",
    method: "get",
  });
};
