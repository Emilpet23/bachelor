<template>
<div id="post">
  <div v-if="error">
    {{ error }}
  </div>

  <form id="form" v-on:submit="handleSubmit" v-else>
    <label for="name">Måned</label>
    <input id="name" v-model="modifiedData.month" type="text" name="name" placeholder="Hvilken måned har de vundet?">

    <label for="description">Vinder</label>
    <input id="description" v-model="modifiedData.Vinder" type="text" name="description" placeholder="Hvem vandt?">

    <label for="date">Noter</label>
    <input id="date" v-model="modifiedData.Noter" type="text" name="date" placeholder="Hvad blev der skrevet om personen?">

    <button type="submit" value="Submit" class="button button--green">Submit</button>
  </form>

</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Post',
  data() {
    return {
      modifiedData: {
        month: '',
        Vinder: '',
        Noter: ''
      },
      error: null
    }
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:8947/winner-overviews')
      this.winner = response.data;
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    handleSubmit: async function(e) {
      e.preventDefault();

      try {
        const response = await axios.post('http://localhost:8947/winner-overviews', this.modifiedData)
        console.log(response);
      } catch(error) {
        this.error = error;
      }
    }
  }
}
</script>