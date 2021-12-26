<template>
  <q-dialog maximized v-model='isOpen' >
    <div class='row q-pa-none q-pa-lg wrap' style='max-height: 100vh; position: relative' >
      <div style='position: absolute; right: 0; top: 0; transform: translateX(-75%) translateY(75%); z-index: 9'>
        <CloseIcon :on-click='closeDialog' />
      </div>
      <section class='col-12 col-sm-8'>
        <FeedItem @articleDeleted='closeDialog' :article='article' />
      </section>
      <CommentSection :article-id='article.id' />
    </div>
  </q-dialog>
</template>

<script>
import FocusArticle from './FocusArticle';



export default FocusArticle;
</script>

<style scoped>

</style>
