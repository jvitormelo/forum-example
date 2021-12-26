import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ExampleStateInterface } from './state';
import UserRepository, { UserDTO } from 'src/repositories/UserRepository';
import TokenHandler from 'src/utils/TokenHandler';
import JWTService from 'src/services/JWTService';

interface SignInParams {
  email: string;
  password: string;
}

interface SignUpParams extends SignInParams {
  username: string;
}

export type SignUpAction = (payload: SignUpParams) => Promise<void>
export type SignInAction = (payload: SignInParams) => Promise<void>

const actions: ActionTree<ExampleStateInterface, StateInterface> = {
  async signIn({ dispatch }, { email, password }: SignInParams) {
    const { data } = await UserRepository.find({
      email
    });
    const user = data[0] || null;

    // TODO mover para um arquivos as mensagens
    if (!user) throw new Error('Usuário não cadastro');

    // TODO mover para um arquivos as mensagens
    if (user.password !== password)
      throw new Error('Email ou senha incorretos');


    await dispatch('logIn', user);

  },

  async signUp({ dispatch }, payload: SignUpParams) {
    const { data } = await UserRepository.find({
      email: payload.email
    });

    if (data.length) throw new Error('Email já usado');

    const { data: user } = await UserRepository.create(payload);

    await dispatch('logIn', user);
  },

  // TODO melhorar o nome desse método
  logIn({ commit }, user: UserDTO) {

    const token = JWTService.create({
      id: String(user.id)
    });

    TokenHandler.setToken(token);

    commit('SET_USER', user);
  },

  logOut({ commit }) {
    TokenHandler.clearToken();
    commit('SET_USER', {});
  }
};

export default actions;
