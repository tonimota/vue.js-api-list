<template>
  <div class="navbar">
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-12 item">
        <router-link :to="{ path: '/' }" title="Home">Home</router-link>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 item">
        <router-link :to="{ path: '/beers' }" title="Beers">Beers</router-link>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-12 item">
        <router-link :to="{ path: '/starwars' }" title="Starwars">Starwars</router-link>
      </div>
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
  height: 60px;
  line-height: 60px;
  .item {
    background-color: chocolate;
    text-align: center;
    color: #fff;
    transition: all 1s;
    a {
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
