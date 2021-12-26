<template>
  <q-dialog v-model='isOpenSynced'>
    <q-card class='q-pa-md flex column ' style='min-width: 30vw'>
      <div class='flex justify-end q-mb-md'>
        <q-icon @click='close' style='cursor: pointer' size='md' color='negative' name='close' />
      </div>
      <q-form autocomplete='off' v-model='formData.isValid' @submit='handleSubmit'
              class='flex column' style='gap: 1rem;'>
        <q-input filled :rules='formRules.username' v-model='formData.username' name='username'
                 label='Nome de usuário' type='text' />
        <q-input filled :rules='formRules.email' v-model='formData.email' label='Email' name='email'
                 type='email' />
        <q-input filled :rules='formRules.password' v-model='formData.password' label='Senha'
                 name='password' :type='passwordVisibility ? "text" : "password"'>
          <template v-slot:append>
            <q-icon style='cursor: pointer' color='primary'
                    @click='passwordVisibility = !passwordVisibility' size='sm'

                    :name="passwordVisibility ? 'mdi-eye-off' : 'mdi-eye'" />
          </template>
        </q-input>

        <span @click='alreadyHaveAccountHandler' class='text-center' style='text-decoration: underline;cursor: pointer'>Já tem conta? <strong >ENTRAR</strong> </span>
        <q-btn rounded :loading='isLoading' :disable='!formData.isValid' color='primary' type='submit'>Cadastrar
        </q-btn>
      </q-form>

    </q-card>
  </q-dialog>
</template>

<script>
import SignUp from './SignUp';

export default SignUp;
</script>

<style scoped>

</style>
