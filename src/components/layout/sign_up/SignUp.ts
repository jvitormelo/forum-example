import { Component, Emit, PropSync } from 'vue-property-decorator';
import { minLength, required, validateEmail } from 'src/utils/formRules';
import { Action } from 'vuex-class';
import { SignUpAction } from 'src/store/user/actions';
import AbstractController from 'src/services/AbstractController';
import { errorMessages } from 'src/utils/feedbackMessages/errorMessages';
import { successMessages } from 'src/utils/feedbackMessages/successMessages';

// TODO achar uma maneira de diminuir a repetição de codigo entre o SignIn e SignUp
@Component({
  name: 'SignUp',
  components: { CloseIcon: () => import('src/components/global/close_icon/index.vue') }
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


  @Emit('openSignIn')
  alreadyHaveAccountHandler(){
    this.close()
  }

  close() {
    this.isOpenSynced = false;
  }

  async handleSubmit() {
    try {
      this.isLoading = true;
      await this.signUp(this.formData);
      this.openSnackbar({
        type: 'success',
        message: successMessages.signUp
      });
    } catch (error) {
      this.openSnackbar({
        type: 'error',
        message: (error as Error).message || errorMessages.unexpected
      });
    } finally {
      this.isLoading = false;
    }
  }

}

