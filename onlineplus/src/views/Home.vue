<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/onlineplus_logo_optimized.svg" />
    <Login msg="Login her" />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";

export default {
  name: "Home",
  components: {
    Login
  }
};
</script>
