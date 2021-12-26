import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';


type Dialogs = 'signIn' | 'signUp'

@Component({
  name: 'Navbar',
  components: {
    SignUp: () => import('./sign_up/index.vue'),
    SignIn: () => import('./sign_in/index.vue')
  }
})
export default class Navbar extends Vue {
  @Getter('User/isAuthenticated') isAuthenticated!: boolean;


  @Action('User/logOut') logOut!: () => void;

  isOpen = {
    signIn: false,
    signUp: false
  };


  logOutHandler(){
    this.isOpen = {
      signUp: false,
      signIn: false
    }
    this.logOut()
  }

  toggleDialog(dialog: Dialogs) {
    this.isOpen[dialog] = !this.isOpen[dialog];
  }
}
