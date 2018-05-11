<template>
  <div class="col">
    <h1>Selecione algum dos menus acima</h1>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    spotAcess () {
      let clientId = '0e4f0310c6a24c0fabb817d1b2e61e6c' // Your client id
      let clientSecret = 'd810599973214a03a9a5f3f7c8f5b06b' // Your secret
      let redirectUri = 'http://localhost:8080/callback' // Your redirect uri
      let scope = 'user-read-private user-read-email';
      let state = Math.random();

      let url = 'https://accounts.spotify.com/authorize/?' + 'response_type=' + 'code' + '&client_id=' + clientId + '&scope=' + scope + '&redirect_uri='  + redirectUri + '&state=' + 54235436
      window.location.href = url

      console.log(url)

      // if (error) {
      //     alert('There was an error during the authentication');
      //   } else {
          // if (access_token) {
            // render oauth info
            // oauthPlaceholder.innerHTML = oauthTemplate({
            //   access_token: access_token,
            //   refresh_token: refresh_token
            // });
          //   $.ajax({
          //       url: 'https://api.spotify.com/v1/me',
          //       headers: {
          //         'Authorization': 'Bearer ' + access_token
          //       },
          //       success: function(response) {
          //         console.log(response);

          //         // $('#login').hide();
          //         // $('#loggedin').show();
          //       }
          //   });
          // } else {
          //   console.log('sem acess token')
          //     // render initial screen
          //     // $('#login').show();
          //     // $('#loggedin').hide();
          // }

          // document.getElementById('obtain-new-token').addEventListener('click', function() {
          //   $.ajax({
          //     url: '/refresh_token',
          //     data: {
          //       'refresh_token': refresh_token
          //     }
          //   }).done(function(data) {
          //     access_token = data.access_token;
          //     oauthPlaceholder.innerHTML = oauthTemplate({
          //       access_token: access_token,
          //       refresh_token: refresh_token
          //     });
          //   });
          // }, false);
        // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
