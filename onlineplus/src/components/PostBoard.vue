<template>
<div id="post">
  <div v-if="error">
    {{ error }}
  </div>

  <form id="form" v-on:submit="handleSubmit" v-else>
    <label for="name">Navn</label>
    <input id="title" v-model="modifiedData.title" type="text" name="title" placeholder="Indtast titel på boardet">

    <label for="description">Måned</label>
    <input id="month" v-model="modifiedData.month" type="text" name="month" placeholder="Indtast måned på boardet">

    <label for="date">Deadline</label>
    <input id="date" v-model="modifiedData.date" type="date" name="date">

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
      this.boards = response.data;
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