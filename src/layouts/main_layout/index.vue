<template>
  <q-layout class='bg-dark' >
    <Navbar />
    <q-page-container>
      <router-view />
    </q-page-container>
    <SignUp @openSignIn='() => toggleDialog("signIn")'  :is-open.sync='isOpen.signUp' />
    <SignIn @openSignUp='() => toggleDialog("signUp")' :is-open.sync='isOpen.signIn' />
  </q-layout>
</template>

<script>
import MainLayout from './MainLayout';

export default MainLayout;


</script>
