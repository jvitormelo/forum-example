import { Component, Emit, PropSync } from 'vue-property-decorator';
import { minLength, required, validateEmail } from 'src/utils/formRules';
import AbstractController from 'src/services/AbstractController';
import { Action } from 'vuex-class';
import { SignInAction } from 'src/store/user/actions';
import { errorMessages } from 'src/utils/feedbackMessages/errorMessages';
import { successMessages } from 'src/utils/feedbackMessages/successMessages';


@Component({
  name: 'SignIn',
  components: {  CloseIcon: () => import('src/components/global/close_icon/index.vue') , Input: () => import('src/components/global/input/index.vue') }
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
      password: [required, minLength(6)],
      email: [required, validateEmail]
    };
  }


  @Emit('openSignUp')
  createAccountHandler(){
    this.close()

  }

  close() {
    this.isOpenSynced = false;
  }

  async handleSubmit() {
    try {
      this.isLoading = true;
      await this.signIn(this.formData);
      this.openSnackbar({
        type: 'success',
        message: successMessages.commentCreated
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

