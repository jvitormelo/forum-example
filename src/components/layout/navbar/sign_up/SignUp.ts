import { Component, PropSync, Vue } from 'vue-property-decorator';
import { required, validateEmail } from 'src/utils/formRules';

// TODO achar uma maneira de diminuir a repetição de codigo entre o SignIn e SignUp
@Component({
  name: 'SignUp'
})
export default class SignUp extends Vue {
  @PropSync('isOpen', {
    type: Boolean,
    required: true
  }) isOpenSynced!: boolean;

  passwordVisibility = false;
  formData = {
    isValid: false,
    username: '',
    email: '',
    password: ''
  };


  get formRules() {
    return {
      password: [required],
      email: [required, validateEmail],
      username: [required]
    };
  }

  close() {
    this.isOpenSynced = false;
  }

  handleSubmit() {
    console.log(this.formData);
  }

}

