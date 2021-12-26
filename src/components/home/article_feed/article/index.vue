<template>
  <q-card class='flex column q-pa-md bg-white'
          style='background: #eee; min-width: 50vw; height: 100%'>
    <UserName :username='article.user.username' />
    <div class='q-my-md text-h6'>{{ article.title }}</div>
    <div style='word-break: break-all;
     text-overflow: ellipsis;
     max-width: 50vw;
     overflow: hidden;
     white-space: nowrap'
     v-html='article.description' />
    <div class='flex q-mt-md justify-end'>
      {{ formatDate(article.createdAt) }}
    </div>
    <div style='height: 1px' class='bg-dark' />

    <div class='flex row q-mt-md items-center'>
      <div class='flex q-mr-auto' v-if='isLoggedUserAuthor'>
        <q-icon class='q-mr-sm cursor-pointer'  :loading='isLoading.delete'  size='md' @click='handleDelete' name='mdi-trash-can' color='negative' />
        <q-icon @click='handleEdit' class='cursor-pointer' size='md' name='mdi-pencil' color='primary'/>
      </div>

      <div class='flex q-ml-auto '>
        <LikeArticle :article-id='article.id' />
        <q-icon  v-if='isOnFeed'  color='primary' name='mdi-chat-outline' size='sm' class='q-ml-md cursor-pointer'
                @click='handleComment' />
      </div>
    </div>
  </q-card>

</template>

<script>
import Article from './Article';


export default Article;
</script>

<style scoped>

</style>
