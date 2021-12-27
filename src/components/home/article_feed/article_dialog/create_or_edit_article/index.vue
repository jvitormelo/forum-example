<template>
  <q-dialog v-model='isOpen' id='create-or-edit-article-dialog'>
    <q-card class='q-pa-md' style='min-width: 50vw; position: relative '>
      <div class='flex justify-end'>
        <CloseIcon  :on-click='closeDialog'  />
      </div>
      <div class='text-h6 q-mb-md  text-center text-dark'>{{ strategy.title }}</div>
      <q-form @submit='handleSubmit'>
        <Input :value.sync='formData.title' label='Título' name='title' :rules='formRules.title' />
        <div class='q-my-md'>
          <q-editor content-class='bg-grey'  v-model='formData.description' label='descrição' />
        </div>
        <div class='flex justify-end'>
          <q-btn color='primary'  rounded :loading='isLoading' unelevated type='submit'>{{ strategy.submitTitle }}</q-btn>
        </div>

      </q-form>

    </q-card>

  </q-dialog>

</template>

<script>
import CreateOrEditArticle from './CreateOrEditArticle';



export default CreateOrEditArticle;
</script>

<style scoped>

</style>
