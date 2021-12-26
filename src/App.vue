<template>
  <div id='q-app' >
    <router-view v-if='!isLoading' />
  </div>
</template>
<script lang='ts'>
import { Component } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';
import AbstractController from 'src/services/AbstractController';
import TokenHandler from 'src/utils/TokenHandler';
import JWTService from 'src/services/JWTService';
import UserRepository, { UserDTO } from 'src/repositories/UserRepository';

@Component
export default class App extends AbstractController {
  @Mutation('User/SET_USER') setUser!: (user:UserDTO) => void

  async createdHandler(): Promise<void> {
    await this.getUserHandler();
  }

  async getUserHandler() {
    const token = TokenHandler.getToken();
    const { id } = JWTService.verify(token);

    const {data} = await UserRepository.find({id})
    const user = data[0]
    this.setUser(user)
  }

}
</script>
