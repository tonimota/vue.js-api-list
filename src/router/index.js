import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import List from '@/components/List/list'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
<<<<<<< HEAD
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
=======
      path: '/Callback',
      name: 'Callback',
      component: HelloWorld
>>>>>>> feature/tm/integration
    }
  ]
})
