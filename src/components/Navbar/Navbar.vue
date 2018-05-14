<template>
  <div class="row navbar">
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 item">
      <router-link :to="{ path: '/beers' }" title="Beers">Beers</router-link>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 item">
      <router-link :to="{ path: '/starwars' }" title="Starwars">Starwars</router-link>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 item">
      <router-link :to="{ path: '/favorite' }" title="Home">Favorite</router-link>
    </div>
  </div>
</template>
<script>
</script>

<style scoped lang="scss">
a, li, ul {
  text-decoration: none;
  color: #000;
  list-style: none;
}
.navbar {
  width: 100%;
  height: 60px;
  line-height: 60px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1;
  border: 0px;
  margin: 0px;
  .item {
    background-color: chocolate;
    text-align: center;
    color: #fff;
    transition: all 1s;
    a {
      display: block;
      color: #fff;
      transition: all 1s;
    }
    &:hover {
      background-color: #fff;
      a {
        color: #000;
        font-weight: bold;
      }
    }
  }
}
</style>
