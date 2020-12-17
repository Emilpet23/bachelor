<template>
    <div id="nav">
        <div class="logo">
            <router-link to="/about"><img src="@/assets/images/op_logo.png" alt="onlineplus logo"></router-link>
        </div>
        <div class="nav__bar">
            <router-link to="/about">Guide</router-link>
            <router-link to="/vindere">Vindere</router-link>
            <router-link to="/votes">Stemmer</router-link>
            <router-link to="/board">Board</router-link>
            <router-link to="/">Log ud</router-link>
        </div>
      
    </div>
    

</template>

<script>
    export default {
        name: 'Navigation'
    }
</script>