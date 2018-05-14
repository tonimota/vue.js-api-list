<template>
  <div class="container-fluid">
    <div class="row">
      <navbar></navbar>
      <h2>Select one category of menus</h2>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar'
export default {
  name: 'Home',
  components: {
    'navbar': Navbar
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
