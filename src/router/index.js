import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import List from '@/components/List/List'
import NewList from '@/components/List/NewList'

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
    },
    {
      path: '/favorite',
      name: 'Favorite',
      component: NewList
    }
  ]
})
