import { Vue, Component, Provide, Watch } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

type Dialogs = 'signIn' | 'signUp'

export type ToggleAuthenticationDialog = (value: Dialogs) => void

@Component({
  name: 'MainLayout',
  components: {
    Navbar: () => import('../../components/layout/navbar/index.vue'),
    SignUp: () => import('src/components/layout/sign_up/index.vue'),
    SignIn: () => import('src/components/layout/sign_in/index.vue')
  }
})
export default class MainLayout extends Vue {
  @Getter('User/isAuthenticated') isAuthenticated!: boolean;

  isOpen = {
    signIn: false,
    signUp: false
  };

  @Provide('toggleAuthenticationDialog')
  toggleDialog(dialog: Dialogs) {
    this.isOpen[dialog] = !this.isOpen[dialog];
  }


  @Watch('isAuthenticated')
  watchIsAuthenticated() {
    this.closeAllDialogs();
  }

  closeAllDialogs() {
    this.isOpen = {
      signUp: false,
      signIn: false
    };
  }
}
