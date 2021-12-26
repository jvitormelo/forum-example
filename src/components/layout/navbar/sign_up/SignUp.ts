import { Component, PropSync, Vue } from 'vue-property-decorator';
import { minLength, required, validateEmail } from 'src/utils/formRules';
import { Action } from 'vuex-class';
import { SignUpAction } from 'src/store/user/actions';
import AbstractController from 'src/services/AbstractController';

// TODO achar uma maneira de diminuir a repetição de codigo entre o SignIn e SignUp
@Component({
  name: 'SignUp'
})
export default class SignUp extends AbstractController {
  @Action('User/signUp') signUp!: SignUpAction;

  @PropSync('isOpen', {
    type: Boolean,
    required: true
  }) isOpenSynced!: boolean;

  passwordVisibility = false;
  formData = {
    isValid: true,
    username: '',
    email: '',
    password: ''
  };
  isLoading = false;


  get formRules() {
    return {
      password: [required, minLength(6)],
      email: [required, validateEmail],
      username: [required]
    };
  }

  close() {
    this.isOpenSynced = false;
  }

  async handleSubmit() {
    try {
      this.isLoading = true;
      await this.signUp(this.formData);
      // TODO encapsular mensagem
      this.openSnackbar({
        type: 'success',
        message: 'Cadastrado com sucesso!'
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

