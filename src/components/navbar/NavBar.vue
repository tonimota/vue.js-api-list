<template>
  <div class="options">
    <ul>
      <ul class="nav-menu">
        <li><router-link :to="{ path: '/beers' }" title="Beers">Beers</router-link></li>
        <li><router-link :to="{ path: '/starwars' }" title="Starwars">Starwars</router-link></li>
      </ul>
    </ul>
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

})
</script>

<style scoped lang="scss">

</style>

