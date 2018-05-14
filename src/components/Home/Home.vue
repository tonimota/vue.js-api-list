<template>
  <div class="container-fluid">
    <div class="row">
      <navbar></navbar>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
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
