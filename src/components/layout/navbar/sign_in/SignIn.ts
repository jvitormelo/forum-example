import { Component, Emit, PropSync, Vue } from 'vue-property-decorator';
import { required, validateEmail } from 'src/utils/formRules';


@Component({
  name: 'SignUp'
})
export default class SignIn extends Vue {
  @PropSync('isOpen', {
    type: Boolean,
    required: true
  }) isOpenSynced!: boolean;


  formData = {
    email: '',
    password: '',
    isValid: false,
  }
  passwordVisibility = false;


  get formRules() {
    return {
      password: [required],
      email: [required, validateEmail],
    };
  }

  close() {
    this.isOpenSynced = false;
  }

  handleSubmit() {
    console.log(this.formData);
  }

}

