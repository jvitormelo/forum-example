import { Component, Vue } from 'vue-property-decorator';

type Dialogs = 'signIn' | 'signUp'

@Component({
  name: 'Navbar',
  components: {
    SignUp: () => import('./sign_up/index.vue'),
    SignIn: () => import('./sign_in/index.vue')
  }
})
export default class Navbar extends Vue {

  isOpen = {
    signIn: false,
    signUp: false
  };


  toggleDialog(dialog: Dialogs) {
    this.isOpen[dialog] = !this.isOpen[dialog];
  }

}
