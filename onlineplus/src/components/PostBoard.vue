<template>
<div id="app">
  <div v-if="error">
    {{ error }}
  </div>

  <form id="form" v-on:submit="handleSubmit" v-else>
    <label for="name">Navn</label>
    <input id="name" v-model="modifiedData.title" type="text" name="name">

    <label for="description">Måned</label>
    <input id="description" v-model="modifiedData.month" type="text" name="description">

    <label for="date">Dato</label>
    <input id="date" v-model="modifiedData.date" type="date" name="date">

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
        title: '',
        month: '',
        date: ''
      },
      error: null
    }
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:8947/boards')
      this.allCategories = response.data;
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    handleSubmit: async function(e) {
      e.preventDefault();

      try {
        const response = await axios.post('http://localhost:8947/boards', this.modifiedData)
        console.log(response);
      } catch(error) {
        this.error = error;
      }
    }
  }
}
</script>