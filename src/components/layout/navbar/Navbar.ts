import { Component, Inject, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import { ToggleAuthenticationDialog } from 'layouts/main_layout/MainLayout';


@Component({
  name: 'Navbar',
  components: {}
})
export default class Navbar extends Vue {
  @Getter('User/isAuthenticated') isAuthenticated!: boolean;
  @Action('User/logOut') logOut!: () => void;
  @Inject('toggleAuthenticationDialog') toggleDialog!: ToggleAuthenticationDialog;


}
