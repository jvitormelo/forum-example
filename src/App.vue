<template>
  <div id='q-app' >
    <router-view v-if='!isLoading' />
  </div>
</template>
<script lang='ts'>
import { Component } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import AbstractController from 'src/services/AbstractController';


@Component({
  name:'App'
})
export default class App extends AbstractController {
  @Action('User/getUserFromToken') getUserFromToken!: () => void

   async createdHandler(){
     this.getUserFromToken()
  }



}
</script>
