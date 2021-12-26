import { MutationTree } from 'vuex';
import { ExampleStateInterface } from './state';
import { UserDTO } from 'src/repositories/UserRepository';

const mutation: MutationTree<ExampleStateInterface> = {
  SET_USER(state, { username, email, id }: UserDTO) {
    state.user = {
      ...state.user,
      id,
      email,
      username
    };
  },
};

export default mutation;
