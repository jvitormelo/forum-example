<template>
  <q-dialog v-model='isOpen'>
    <q-card class='q-pa-md' style='min-width: 50vw'>
      <span class='text-h6'>{{ strategy.title }}</span>
      <q-form @submit='handleSubmit'>
        <q-input v-model='formData.title' name='title' label='Título' />
        <div class='q-my-md'>
          <span>Descrição</span>
          <q-editor v-model='formData.description' label='descrição' />
        </div>
        <q-btn :loading='isLoading' type='submit'>{{ strategy.submitTitle }}</q-btn>
      </q-form>

    </q-card>

  </q-dialog>

</template>

<script>
import ArticleDialog from './ArticleDialog';

export default ArticleDialog;
</script>

<style scoped>

</style>
