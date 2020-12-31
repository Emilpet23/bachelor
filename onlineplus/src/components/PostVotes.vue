<template>
<div id="post">
  <div v-if="error">
    {{ error }}
  </div>

  <form id="form" v-on:submit="handleSubmit" v-else>
    <label for="name">Navn</label>
    <input id="name" v-model="modifiedData.name" type="text" name="name" placeholder="Stem her">

    <label for="description">Noter</label>
    <input id="description" v-model="modifiedData.description" type="text" name="description" placeholder="Indtast beskrivelse">

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
        name: '',
        description: '',
      },
      error: null
    }
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:8947/votes')
      this.votes = response.data;
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    handleSubmit: async function(e) {
      e.preventDefault();

      try {
        const response = await axios.post('http://localhost:8947/votes', this.modifiedData)
        console.log(response);
      } catch(error) {
        this.error = error;
      }
    }
  }
}
</script>