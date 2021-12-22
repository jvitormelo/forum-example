<template>
  <q-dialog v-model='isOpenSynced'>
    <q-card class='q-pa-md flex column '>
      <div class='flex justify-end q-mb-sm'>
        <q-icon @click='close' style='cursor: pointer' size='md' color='negative' name='close' />
      </div>

      <q-form @submit.prevent='handleSubmit' class='flex column' style='gap: 1rem; min-width: 20rem'>
        <q-input filled :rules='formRules.email' v-model='formData.email' label='Email' name='email' type='email' />
        <q-input filled :rules='formRules.password' v-model='formData.password' label='Password' name='password'
                 :type='passwordVisibility ? "text" : "password"'>
          <template v-slot:append>
            <q-icon style='cursor: pointer' color='primary' @click='passwordVisibility = !passwordVisibility' size='sm'

                    :name="passwordVisibility ? 'mdi-eye-off' : 'mdi-eye'" />
          </template>
        </q-input>
        <q-btn disabled='' color='primary' type='submit'>Sign In</q-btn>
      </q-form>

    </q-card>
  </q-dialog>
</template>

<script>
import SignIn from './SignIn';

export default SignIn;
</script>

<style scoped>

</style>
