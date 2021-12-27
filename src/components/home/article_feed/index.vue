<template>
  <div class='flex column items-center'>
    <q-btn id='new-article-btn' @click='createArticleHandler'  size='lg' rounded color='primary' class='q-my-md'>
      Novo artigo
    </q-btn>
    <div class='flex column' :style=' `gap: 1rem; max-width:${maxWidth}` '>
      <FeedItem
        :is-on-feed='true'
        v-for='article of articles'
        :key='article.id' :article='article'
      />
    </div>

    <ArticleDialog @updateFeed='handleReceivedArticle' ref='articleDialog' />
    <FocusArticleDialog :article='activeArticle' ref='focusArticle' />

  </div>
</template>

<script>
import ArticleFeed from './ArticleFeed';

export default ArticleFeed;

</script>

<style scoped>

</style>
