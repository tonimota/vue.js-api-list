import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import List from '@/components/List/list'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/beers',
      name: 'Beers',
      component: List,
      props: {
        name: 'Beers'
      }
    },
    {
      path: '/starwars',
      name: 'Starwars',
      component: List,
      props: {
        name: 'Starwars'
      }
    }
  ]
})
