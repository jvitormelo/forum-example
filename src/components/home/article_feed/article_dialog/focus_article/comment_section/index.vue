<template>
  <section class=' col-4   bg-dark flex column q-px-lg q-pb-lg' style='position: relative'>
    <div class='flex column q-mb-md no-wrap q-mt-xl' v-if='!isLoading' style='gap: 1rem; overflow-y: scroll; max-height: 70vh'>
      <Comment :comment='comment' v-for='comment of comments' :key='comment.id' />
    </div>
    <q-skeleton type='card' height='400px' v-else />
    <div class='q-mt-auto'>
      <q-form @submit='createComment' class='bg-white' v-if='isAuthenticated'>
        <q-input filled color='primary'  v-model='formData.message' label='Mensagem'>
          <template #append>
            <q-icon type='submit' @click='createComment'  style='cursor: pointer' name='mdi-send' color='primary' />
          </template>
        </q-input>
      </q-form>

      <div v-else class='flex  flex-center'>
        <q-btn color='primary' rounded @click='toggleAuthenticationDialog("signUp")'> Cadastrar conta</q-btn>
      </div>
    </div>
  </section>

</template>

<script>
import CommentSection from './CommentSection';


export default CommentSection;
</script>

<style scoped>

</style>
