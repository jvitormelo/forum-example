import { Component, Vue } from 'vue-property-decorator';

interface OpenSnackbar {
  message: string,
  type: 'error' | 'success'
}


@Component(
  {
    name: 'AbstractController'
  }
)
export default class AbstractController extends Vue {
  async createdHandler(): Promise<void> {}

  async created() {
    await this.createdHandler();
  }


  openSnackbar({ message, type }: OpenSnackbar) {
    this.$q.notify({
      message,
      color: type === 'error' ? 'negative' : 'positive',
      timeout: 750
    });
  }
}
