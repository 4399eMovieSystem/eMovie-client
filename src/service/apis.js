/**
 * API功能模块
 */

const APIS = {
  // 取消未支付订单
  cancel_book: {
    url: '/api/movies/:mov_id/cancel',
    method: 'POST'
  },
  //获取具体某部电影+播放该电影的影院-影厅信息 
  mov_cin_detail: {
    url: '/api/movies/:mov_id/cinemas',
    method: 'GET'
  },
  //获取某个影院的具体信息
  cin_info: {
    url: '/api/cinemas/:cin_id',
    method: 'GET'
  },
  // 获取具体某部电影的信息
  mov_info: {
    url: '/api/movies/:mov_id',
    method: 'GET'
  },
  //获取电影列表的信息
  mov_list:{
    url: '/api/movies',
    method: 'GET'
  },
  // 获取支付页面数据
  get_pay_data: {
    url: '/api/movies/:mov_id/order',
    method: 'POST'
  },
  // 获取人物详细信息
  peo_info: {
    url: '/api/people/:peo_id',
    method: 'GET'
  },
  // 用户注册
  register: {
    url: '/api/users/register',
    method: 'POST'
  },
  // 用户注销
  logout: {
    url: '/api/users/logout',
    method: 'POST'
  },
  // 用户登录
  login: {
    url: '/api/users/login',
    method: 'POST'
  },
  // 获取短信验证码
  register_sms: {
    url: '/api/users/register/sms',
    method: 'POST'
  },
  // 搜索列表
  search_mov: {
    url: '/api/movies/search',
    method: 'GET'
  },
  // 确定订单支付
  pay: {
    url: '/api/movies/:mov_id/order/makesure',
    method: 'POST'
  },
  // 提交订单
  submit: {
    url: '/api/movies/:mov_id/order',
    method: 'POST'
  },
  // 获取座位信息
  seats_info: {
    url: '/api/movies/:mov_id/seats?vh_id=:vh_id',
    method: 'GET'
  }
}

/**
 * 通过apiKey获取到相应的API
 * @param  {String} apiKey [api关键码]
 * @param  {Object} opts   [路由参数对象]
 * @return {Object}        [路由对象]
 */
export const getAPI = (apiKey, opts = {}) => {
  let api = Object.assign({}, APIS[apiKey]);
  if (!api) return Error('关键码错误');
  Object.keys(opts).forEach(key =>{
    api.url = api.url.replace(':' + key, opts[key]);
  })
  return api;
}