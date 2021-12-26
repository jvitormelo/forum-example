<template>
  <div class='flex items-center'>
    <q-icon @click='handleClick' style='cursor: pointer' :color='isLiked ? "primary" : "" '
            size='sm' name='mdi-thumb-up-outline '></q-icon>
    <span>{{ numberOfLikes }}</span>
  </div>
</template>

<script>
import LikeArticle from './LikeArticle';

export default LikeArticle;
</script>

<style scoped>

</style>
