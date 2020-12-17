<template>
    <div>
        <Navigation></Navigation>
        <h1>Boards</h1>
        <div class="flex-it">
            <Boardlist></Boardlist>
            <PostBoard></PostBoard>
        </div>
        
    </div>
</template>

<script>
import PostBoard from "@/components/PostBoard.vue";
import Boardlist from "@/components/Boardlist.vue";
import Navigation from '@/components/Navigation.vue';

    export default {
        components: {
            Boardlist,
            PostBoard,
            Navigation
        }
    }
</script>

<style lang="scss" scoped>

</style>