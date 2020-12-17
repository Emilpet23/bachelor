<template>
  <div id="winners">
  <div v-if="error">
      {{ error }}
    </div>
    <table v-else class="table">
        <thead>
            <tr class="table__head">
                <th>Måned</th>
                <th>Vinder</th>
                <th>Noter</th>
            </tr>
        </thead>
        <tbody>
            <tr class="table__body" v-for="winner in winners" :key="winner.id">
                <td>{{ winner.month }}</td>
                <td>{{ winner.Vinder }}</td>
                <td>{{ winner.Noter }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'winners',
  data () {
    return {
      winners: [],
      error: null
    }
  },
  async mounted () {
    try {
      const response = await axios.get('http://localhost:8947/winner-overviews')
      this.winners = response.data
    } catch (error) {
      this.error = error;
    }
  }
}
</script>
