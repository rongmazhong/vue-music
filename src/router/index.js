import Vue from 'vue'
import Router from 'vue-router'
import Reacommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Reacommend
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    },
    {
      path: '/rank',
      name: 'rank',
      comment: Rank
    },
    {
      path: '/search',
      name: 'search',
      comment: Search
    }
  ]
})
