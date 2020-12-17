<template>
  <div id="votes">
  <div v-if="error">
      {{ error }}
    </div>
    <table v-else class="table">
        <thead>
            <tr class="table__head">
                <th>Navn</th>
                <th>Note</th>
            </tr>
        </thead>
        <tbody>
            <tr class="table__body" v-for="vote in votes" :key="vote.id">
                <td>{{ vote.name }}</td>
                <td>{{ vote.description }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'votes',
  data () {
    return {
      votes: [],
      error: null
    }
  },
  async mounted () {
    try {
      const response = await axios.get('http://localhost:8947/votes')
      this.votes = response.data
    } catch (error) {
      this.error = error;
    }
  }
}
</script>
