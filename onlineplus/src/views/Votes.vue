<template>
    <div>
        <Navigation></Navigation>
        <h1>Stem her!</h1>
        <div class="flex-it">
            <Vote></Vote>
            <PostVotes></PostVotes>
        </div> 
    </div>
</template>

<script>
import PostVotes from "@/components/PostVotes.vue";
import Vote from "@/components/Vote.vue";
import Navigation from '@/components/Navigation.vue';

    export default {
        components: {
            Vote,
            PostVotes,
            Navigation
        }
    }
</script>

<style lang="scss" scoped>
</style>