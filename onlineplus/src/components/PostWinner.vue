<template>
<div id="app">
  <div v-if="error">
    {{ error }}
  </div>

  <form id="form" v-on:submit="handleSubmit" v-else>
    <label for="name">Måned</label>
    <input id="name" v-model="modifiedData.month" type="text" name="name">

    <label for="description">Vinder</label>
    <input id="description" v-model="modifiedData.Vinder" type="text" name="description">

    <label for="date">Noter</label>
    <input id="date" v-model="modifiedData.Noter" type="text" name="date">

    <input type="submit" value="Submit">
  </form>

</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
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
      this.allCategories = response.data;
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