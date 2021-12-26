import { Component, Vue } from 'vue-property-decorator';

interface OpenSnackbar {
  message: string,
  type: 'error' | 'success'
}


@Component({ name: 'AbstractController' })
export default class AbstractController extends Vue {
  isLoading = false;

  get isMobile(){
    return this.$q.screen.lt.sm
  }

  async createdHandler(): Promise<void> {}

  async created() {
    try {
      this.isLoading = true;
      await this.createdHandler();
    } finally {
      this.isLoading = false;
    }
  }





  openSnackbar({ message, type }: OpenSnackbar) {
    this.$q.notify({
      message,
      color: type === 'error' ? 'negative' : 'positive',
      timeout: 750
    });
  }
}
