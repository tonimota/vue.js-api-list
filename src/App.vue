<template>
  <div id="app">
    <div class="container-fuid">
       <navbar></navbar>
    </div>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
export default {
  name: 'App',
  components: {
    'navbar': Navbar
  },
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
