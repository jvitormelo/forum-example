<template>
  <div class='flex column items-center q-pa-sm'>
    <q-btn @click='createArticleHandler' class='q-mb-md'>Novo artigo</q-btn>
    <q-toggle v-if='isAuthenticated' v-model='onlyArticlesCreatedAuthenticatedUser' label='Somente meus artigos' />


    <div class='flex column' style='gap: 1rem'>
      <FeedItem
        v-for='article of computedArticles'
        :key='article.id' :article='article'
        @removeArticle='removeArticle'
        @editArticle='openArticleDialog'
      />
    </div>

    <ArticleDialog @updateFeed='handleReceivedArticle' ref='articleDialog' />

  </div>
</template>

<script>
import Feed from './Feed';

export default Feed;

</script>

<style scoped>

</style>
