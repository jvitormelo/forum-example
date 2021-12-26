import { store } from 'quasar/wrappers';
import Vuex from 'vuex';
import User from './user';
import { UserDTO } from 'src/types/DTOs/UserDTO';

// import example from './module-example';
// import { ExampleStateInterface } from './module-example/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export interface StateInterface {
  User: UserDTO;
}

export default store(function({ Vue }) {
  Vue.use(Vuex);

  return new Vuex.Store({
    modules: {
      User
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEBUGGING
  });
});
