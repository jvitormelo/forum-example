<template>
  <div class='bg-white q-pa-md rounded-borders flex column'>
    <UserName :username='username' />
    <div class='q-my-md text-body1' v-html='comment.message' />
    <div  class='q-ml-auto'>{{ formatDate(comment.createdAt)   }}</div>
  </div>
</template>

<script>
import Comment from './Comment';

export default Comment;
</script>

<style scoped>

</style>
