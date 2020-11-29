<template>
  <div id="votes">
    <div v-if="error">
      {{ error }}
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>Titel</th>
          <th>Måned</th>
          <th>Dato</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="board in boards" :key="board.id">
          <td><router-link to="/votes">{{ board.title }}</router-link></td>
          <td>{{ board.month }}</td>
          <td>{{ board.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA2MTI3MjE4LCJleHAiOjE2MDg3MTkyMTh9.04NPGpOAeD69H8w_DyvqjVmZ37aA_4_KnL5Gg_sgNpU";

// // Request API.
// axios
//   .get("http://localhost:8947/boards", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   })
//   .then((response) => {
//     // Handle success.
//     console.log("Data: ", response.data);
//   })
//   .catch((error) => {
//     // Handle error.
//     console.log("An error occurred:", error.response);
//   });

export default {
  name: 'boards',
  data () {
    return {
      boards: [],
      error: null
    }
  },
  async mounted () {
    try {
      const response = await axios.get('http://localhost:8947/boards')
      this.boards = response.data
    } catch (error) {
      this.error = error;
    }
  }
}
</script>
