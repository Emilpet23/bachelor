<template>
    <div>
        <Navigation></Navigation>
        <Winners></Winners>
        <PostWinner></PostWinner>
    </div>
</template>

<script>
import PostWinner from "@/components/PostWinner.vue";
import Winners from "@/components/Winners.vue";
import Navigation from '@/components/Navigation.vue';

    export default {
        components: {
            Winners,
            PostWinner,
            Navigation
        }
    }
</script>

<style lang="scss" scoped>

</style>