<template>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <button @click="spotAccess()">Spotify</button>
      </div>
      <div class="col-sm">
        One of three columns
      </div>
      <div class="col-sm">
        One of three columns
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      cliente_id: '0e4f0310c6a24c0fabb817d1b2e61e6c',
      cliente_secret: 'd810599973214a03a9a5f3f7c8f5b06b',
      redirectUri: '',
      scope: '',
      encodeBase: '',
      state: ''
    }
  },
  // methods: {
  //   spotAccess () {
  //     this.redirectUri = 'http://localhost:8080/callback' // Your redirect uri
  //     this.scope = 'user-read-private user-read-email';
  //     this.state = this.generateRandomString(16);
  //     const url = 'https://accounts.spotify.com/authorize/?' + 'response_type=' + 'code' + '&client_id=' + cliente_id + '&scope=' + scope + '&redirect_uri='  + redirectUri + '&state=' + state
  //     window.location.href = url
  //     console.log(url)
  //   },
  //   generateRandomString(length) {
  //     let text = '';
  //     let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  //     for (let i = 0; i < length; i++) {
  //       text += possible.charAt(Math.floor(Math.random() * possible.length));
  //     }
  //       return text;
  //   }
  // },
  // mounted() {
  //   this.encodeBase = btoa(this.cliente_id + ':' + this.cliente_secret)
  //   const path = location.search.replace('?code=','')
  //   if(path) {
  //     axios.post('https://accounts.spotify.com/api/token', {
  //       form: {
  //         code: path,
  //         redirect_uri: this.redirect_uri,
  //         grant_type: 'authorization_code'
  //       },
  //       headers: {
  //         'Authorization': 'Basic ' + this.encodeBase
  //       },
  //       json: true
  //     }).then(response => {
  //       console.log(response);
  //     }).catch(e => {
  //       console.log(e)
  //     })
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
