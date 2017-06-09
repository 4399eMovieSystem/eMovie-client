/**
 * Http请求模块
 */

import { getAPI } from './apis.js'
import axios from 'axios'

/**
 * Http请求函数，Http请求统一使用该函数
 * @param  {String} apiKey [api关键码]
 * @param  {Object} params [路由参数对象]
 * @param  {Object} data   [发送的数据]
 * @return {Json}
 */
export const getData = ({ apiKey, params, data }) => {
  let api = getAPI(apiKey, params);
	let url = api.url;

  if (api.method == 'GET' && data) {
    let dataStr = '';
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&';
    });
    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
			url += '?' + dataStr;
		}
  }

  return axios({
    method: api.method,
    url,
    data: data,
    /*transformRequest: [
      function(data) {
        let ret = '';
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
        }
        ret = ret.substr(0, ret.lastIndexOf('&'));
        return ret;
      }
    ],*/
    /*headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },*/
    withCredentials: true
  }).then(res => {
    return res.data;
  })
}