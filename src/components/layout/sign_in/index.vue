<template>
  <q-dialog v-model='isOpenSynced'>
    <q-card class='q-pa-md flex column' style='min-width: 30vw'>
      <div class='flex justify-end q-mb-md'>
        <CloseIcon :on-click='close' />
      </div>

      <q-form v-model='formData.isValid' @submit.prevent='handleSubmit' class='flex column'
              style='gap: 1rem'>
        <Input name='email' label='Email' type='email' :rules='formRules.email'
               :value.sync='formData.email' />

        <Input :rules='formRules.password' :value.sync='formData.password' label='Senha'
               name='password' :type='passwordVisibility ? "text" : "password"'>
          <template v-slot:append>
            <q-icon class='cursor-pointer' color='primary'
                    @click='passwordVisibility = !passwordVisibility' size='sm'
                    :name="passwordVisibility ? 'mdi-eye-off' : 'mdi-eye'" />
          </template>
        </Input>

        <span @click='createAccountHandler' class='text-center cursor-pointer'
              style='text-decoration: underline;'>Não possui conta? <strong>Cadastrar</strong> </span>
        <q-btn rounded :loading='isLoading' color='primary' type='submit'>
          Entrar
        </q-btn>
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
