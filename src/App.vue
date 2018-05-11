<template>
  <div id="app">
<<<<<<< HEAD
    <div class="container-fuid">
       <navbar></navbar>
    </div>
    <router-view :key="$route.fullPath"/>
=======

    <router-view/>
>>>>>>> feature/tm/integration
  </div>
</template>

<script>
<<<<<<< HEAD
import Navbar from '@/components/navbar/Navbar'
export default {
  name: 'App',
  components: {
    'navbar': Navbar
  },
=======
import Navbar from './components/navbar/NavBar.vue'
export default {
  name: 'App',
>>>>>>> feature/tm/integration
  methods: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
body, html {
  margin: 0px;
  padding: 0px;
}
</style>
