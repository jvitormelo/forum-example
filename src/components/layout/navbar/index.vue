<template>
  <q-toolbar >
    <q-toolbar-title>
      Forum Example
    </q-toolbar-title>

    <div v-if='isAuthenticated' @click='logOutHandler'>
      <q-btn color='primary'>
        Logout
      </q-btn>
    </div>
    <div v-else>
      <q-btn
        class='q-mx-md'
        @click="toggleDialog('signIn')"
      >
        Sign in
      </q-btn>
      <q-btn @click="toggleDialog('signUp')">
        Sign Up
      </q-btn>
      <SignUp :is-open.sync='isOpen.signUp' />
      <SignIn :is-open.sync='isOpen.signIn' />
    </div>

  </q-toolbar>
</template>

<script>
import Header from './Navbar';

export default Header;
</script>

<style scoped>

</style>
