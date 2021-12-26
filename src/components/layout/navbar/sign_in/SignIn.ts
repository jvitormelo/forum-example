import { Component, PropSync, Vue } from 'vue-property-decorator';
import { required, validateEmail } from 'src/utils/formRules';
import AbstractController from 'src/services/AbstractController';
import { Action } from 'vuex-class';
import { SignInAction } from 'src/store/user/actions';


@Component({
  name: 'SignUp'
})
export default class SignIn extends AbstractController {
  @Action('User/signIn') signIn!: SignInAction;

  @PropSync('isOpen', {
    type: Boolean,
    required: true
  }) isOpenSynced!: boolean;


  formData = {
    email: '',
    password: '',
    isValid: false
  };
  passwordVisibility = false;
  isLoading = false;


  get formRules() {
    return {
      password: [required],
      email: [required, validateEmail]
    };
  }

  close() {
    this.isOpenSynced = false;
  }

  async handleSubmit() {
    try {
      this.isLoading = true;
      await this.signIn(this.formData);
      // TODO encapsular mensagem
      this.openSnackbar({
        type: 'success',
        message: 'Logado sucesso!'
      });
    } catch (error) {
      this.openSnackbar({
        type: 'error',
        message: (error as Error).message || 'Erro inesperado'
      });
    } finally {
      this.isLoading = false;
    }
  }

}

