<template>
  <q-layout>
    <q-header elevated>
      <Navbar />
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import MainLayout from './MainLayout';

export default MainLayout;


</script>
