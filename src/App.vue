<template>
  <div id="app">
    <div class="container">
       <navbar></navbar>
       <router-view :key="$route.fullPath"/>
    </div>

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

<style lang="scss">
// @import "./assets/css/bootstrap.min.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
body, html {
  margin: 0px;
  padding: 0px;
}
</style>
