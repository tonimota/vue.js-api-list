<template>
  <div class="container">
    <div class="row">
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    name: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      path: '',
      nameProps: name
    }
  },
  created () {
    this.path = this.$route.path
    if (this.path === '/beers') {
      console.log('beers')
    } else {
      console.log('not beers')
    }
  }
}
</script>

<style>

</style>
