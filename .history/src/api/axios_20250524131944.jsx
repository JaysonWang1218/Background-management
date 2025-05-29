import axios from "axios";
const baseURL = '/api';
//axios二次封装核心
class HttpRequest { 
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    getInsideConfig() {
        const config = {
        baseURL: this.baseUrl,
        headers: {},
        };
        return config;
    }
    interceptors(instance) {
        instance.interceptors.request.use(
        (config) => {
            //请求拦截
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
        );
        instance.interceptors.response.use(
        (response) => {
            //响应拦截
            return response.data;
        },
        (error) => {
            return Promise.reject(error);
        }
        );
    }
    request(options) {
        //创建axios实例
        const instance = axios.create();
        options = { ...this.getInsideConfig(), ...options };
        //完成实例拦截器的绑定
        this.interceptors(instance);
        return instance(options);
    }     
}


export default new HttpRequest(baseURL);
