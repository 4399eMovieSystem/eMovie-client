import { getData } from '../../../src/service/getData.js'
import { getAPI } from '../../../src/service/apis.js'

describe('getAPI.js', () => {
  it('getAPI应该返回期望值', () => {
    let api = getAPI('get_pay_data', { mov_id: 3 });
    expect(api.url).to.equal('/api/movies/3/order');
  })
})

describe('getData.js', () => {

  it('用户登录', () => {
    return getData({ apiKey: 'login', data: { phone: '18819253767', password: 'bob961219' } })
      .then(data => {
        expect(data.status).to.equal('OK');
      });
  })

  describe('', () =>  {
    it('获取具体某部电影+播放该电影的影院-影厅信息', () => {
      return getData({ apiKey: 'mov_info', params: { mov_id: 2 }})
        .then(data => {
          expect(data.status).to.equal('OK');
        })
    }),

    it('获取支付页面数据', () => {
      return getData({ apiKey: 'get_pay_data', params: { mov_id: 1 }, data: { vh_mov_id: 1, seat_id: 1 } })
        .then(data => {
          console.log('========', data);
          expect(data.status).to.equal('OK');
        })
    })
  })

})