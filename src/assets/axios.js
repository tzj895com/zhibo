//封装axios
import axios from "axios"

// axios.defaults.baseURL = '/api'
axios.defaults.withCredentials = true

import { Loading } from 'element-ui';
let loadingInstance;
// 请求拦截，增加loading增加header头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function (data) {
  let src = ''
  for (let item in data) {
    src += encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&'
  }
  return src
}]

// http request拦截器 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  //window.localStorage.getItem("accessToken") 获取token的value
  let token = window.localStorage.getItem("accessToken")
  if (token) {
    //将token放到请求头发送给服务器,将tokenkey放在请求头中
    config.headers.accessToken = token;
    //也可以这种写法
    // config.headers['accessToken'] = Token;
    return config;
  } else {
    return config;
  }

}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});
// 响应拦截，提示异常 
// axios.interceptors.response.use((res) => {
//   if (res.status === 200) {
//     //响应成功，返回数据
//     setTimeout(() => {
//       loadingInstance.close();
//     }, 500);
//     // console.log("响应拦截", res)
//     return res
//   } else {
//     // 响应错误，提示用户错误
//     //返回错误信息
//     return res
//   }
// })
//封装get和post,使用promise封装
export default {
  get(obj) {
    return new Promise((resolve, reject) => {
      // 封装axios
      axios({
        method: "GET",
        url: obj.url,
        params: obj.data,
        headers: obj.headers
      }).then((res) => {
        //做一些特殊操作
        resolve(res.data)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  post(obj) {
    return new Promise((resolve, reject) => {
      // 封装axios
      axios({
        method: "POST",
        url: obj.url,
        data: obj.data || {}
      }).then((res) => {
        //做一些特殊操作
        resolve(res.data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
