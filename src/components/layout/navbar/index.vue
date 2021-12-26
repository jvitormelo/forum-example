<template>
  <q-header id='header' >
    <q-toolbar>
      <q-toolbar-title>
        Forum CRUD
      </q-toolbar-title>
      <div v-if='isAuthenticated' @click='logOut'>
        <q-btn color='primary'>
          SAIR
        </q-btn>
      </div>
      <div v-else>
        <q-btn
          color='primary'
          class='q-mr-md'
          rounded
          @click="toggleDialog('signIn')"
        >
          ENTRAR
        </q-btn>
        <q-btn color='primary'  rounded @click="toggleDialog('signUp')">
          CADASTRAR
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
import Header from './Navbar';

export default Header;
</script>

<style scoped>
#header {
  position: fixed;
  top: 0;
  background: rgba(25,25,28,.9);
}

</style>
