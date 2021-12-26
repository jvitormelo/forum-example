<template>
  <q-layout style='background: var(--q-color-dark)'>
    <Navbar />
    <q-page-container>
      <router-view />
    </q-page-container>
    <SignUp @openSignIn='() => toggleDialog("signIn")'  :is-open.sync='isOpen.signUp' />
    <SignIn :is-open.sync='isOpen.signIn' />
  </q-layout>
</template>

<script>
import MainLayout from './MainLayout';

export default MainLayout;


</script>
