<template>
  <q-card class='flex column q-pa-md' style='background: #eee; width: 50vw'>
    <div>{{ article.title }}</div>
    <div v-html='article.description'/>

    <div class='flex justify-center justify-md-end'>
      <div class='flex column row-xl row-md row-lg'>
        <div class='flex column' v-if='isLoggedUserAuthor'>
          <q-btn :loading='isLoading.delete' @click='handleDelete'>Excluir</q-btn>
          <q-btn @click='handleEdit'>Editar</q-btn>
        </div>

        <q-btn>Curtir {{ article.likes }}</q-btn>
        <q-btn>Comentar</q-btn>
      </div>

    </div>
  </q-card>

</template>

<script>
import FeedItem from './FeedItem';

export default FeedItem;
</script>

<style scoped>

</style>
