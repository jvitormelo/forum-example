import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { ExampleStateInterface } from './state';

const getters: GetterTree<ExampleStateInterface, StateInterface> = {
  isAuthenticated(state) {
    return !!state.user.id;
  },

  userId(state) {
    return state.user.id;
  }
};

export default getters;
