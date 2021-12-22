<template>
  <q-toolbar>
    <q-toolbar-title>
      Forum Example
    </q-toolbar-title>
    <q-btn>Home</q-btn>
    <q-btn @click='toggleDialog("signIn")' class='q-mx-md'>Sign in</q-btn>
    <q-btn @click='toggleDialog("signUp")' >Sign Up</q-btn>
    <SignUp  :is-open.sync='isOpen.signUp' />
    <SignIn  :is-open.sync='isOpen.signIn' />
  </q-toolbar>
</template>

<script>
import Header from './Navbar';

export default Header;
</script>

<style scoped>

</style>
