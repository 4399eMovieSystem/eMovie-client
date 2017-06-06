import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'

import CinDetail from '@/components/pages/CinDetail/CinDetail'
import Home from '@/components/pages/Home/Home'
import LoginRegister from '@/components/pages/LoginRegister/LoginRegister'
import MovDetail from '@/components/pages/MovDetail/MovDetail'
import MovList from '@/components/pages/MovList/MovList'
import PayDetail from '@/components/pages/PayDetail/PayDetail'
import TicketBook from '@/components/pages/TicketBook/TicketBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cinDetail',
      name: 'CinDetail',
      component: CinDetail
    },
    {
      path: '/loginRegister',
      name: 'LoginRegister',
      component: LoginRegister
    },
    {
      path: '/movList',
      name: 'MovList',
      component: MovList
    },
    {
      path: '/movList/:mov_id',
      name: 'MovDetail',
      component: MovDetail
    },
    {
      path: '/ticketBook',
      name: 'TicketBook',
      component: TicketBook,
    },
    {
        path: '/ticketBook/payDetail',
        name: 'PayDetail',
        component: PayDetail
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
