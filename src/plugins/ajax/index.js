/* eslint-disable */
'use strict';
import axios from 'axios';
import qs from 'qs';
//添加请求拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
//添加响应拦截器
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.resolve(error.response);
  },
);
// axios.defaults.baseURL = 'http://www.sonyo.com/api';
// axios.defaults.baseURL = '/';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.timeout = 10000;

function setOpts(opts) {
  return {
    method: opts.method,
    baseURL: '/', // 测试
    url: opts.url,
    timeout: 10000,
    params: opts.params,
    data: opts.params,
    headers:
      opts.method == 'get'
        ? {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json; charset=UTF-8',
          }
        : {
            'Content-Type': 'application/json;charset=UTF-8',
          },
  };
}

function checkStatus(response) {
  return new Promise((resolve, reject) => {
    if (
      response &&
      (response.status === 200 || response.status === 304 || response.status === 400)
    ) {
      if (response.data.code === 1) {
        resolve(response.data.datum);
      } else if (response.data.code === 2) {
        resolve(response.data);
      }
    } else {
      reject({
        state: '0',
        message: '网络出现问题',
      });
    }
  });
}
export default {
  post(url, params) {
    return axios(
      setOpts({
        method: 'post',
        url: url,
        params: params,
      }),
    ).then(response => {
      return checkStatus(response);
    });
  },
  get(url, params) {
    return axios(
      setOpts({
        method: 'get',
        url: url,
        params: params,
      }),
    ).then(response => {
      return checkStatus(response);
    });
  },
};
// 如有不懂欢迎加全栈开发交流QQ群：864305860
