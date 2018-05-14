<template>
  <div id="app">
    <home></home>
    <div class="container">
      <router-view :key="$route.fullPath"/>
    </div>
  </div>
</template>

<script>
import Home from '@/components/Home/Home'
export default {
  name: 'App',
  components: {
    'home': Home
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import "./assets/css/main.scss";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
body, html {
  margin: 0px;
  padding: 0px;
}
</style>
