<template>
    <div>
        <Navigation></Navigation>
        <Vote></Vote>
        <PostVotes></PostVotes>
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