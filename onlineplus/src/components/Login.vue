<template>
  <div id="Logon">
    <router-view />

  <h1>Login her</h1>

  <form id="login" v-on:submit="handleSubmit">
    <label for="identifier">Brugernavn/E-mail</label>
    <input id="identifier" v-model="modifiedData.identifier" type="text" name="identifier">

    <label for="password">Kode</label>
    <input id="password" v-model="modifiedData.password" type="password" name="password">

    <router-link to="/about">Login</router-link>
    <!-- <input type="submit" value="Submit"> -->
  </form>

  </div>
</template>

<script>
import axios from 'axios';

// Request API.
// axios
//   .post('http://localhost:8947/auth/local', {
//     identifier: '',
//     password: '',
//   })
//   .then(response => {
//     // Handle success.
//     console.log('Well done!');
//     console.log('User profile', response.data.user);
//     console.log('User token', response.data.jwt);
//   })
//   .catch(error => {
//     // Handle error.
//     console.log('An error occurred:', error.response);
//   });

export default {
  name: 'Logon',
  data() {
    return {
      modifiedData: {
        identifier: '',
        password: ''
      },
      error: null
    }
  },
  methods: {
    handleSubmit: async function(e) {
      e.preventDefault();

      try {
        const response = await axios.post('http://localhost:8947/auth/local', this.modifiedData)
        console.log(response);
      } catch(error) {
        this.error = error;
      }
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>



