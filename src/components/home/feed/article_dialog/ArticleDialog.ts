import AbstractController from 'src/services/AbstractController';
import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
import ArticleRepository, { ArticleDTO } from 'src/repositories/ArticleRepository';
import { Getter } from 'vuex-class';


export interface ArticleDialogRef extends Vue {
  openDialog(article?: ArticleDTO): void;
}

interface Strategy {
  title: string,
  submitTitle: string,
  repositoryMethod: 'create' | 'update'
  successMessage: string
}

@Component({
  name: 'ArticleDialog'
})
export default class ArticleDialog extends AbstractController {
  @Getter('User/userId') userId!: number;

  isOpen = false;

  formData = {
    id: 0,
    title: '',
    description: '',
    isValid: false
  };

  isLoading = false;

  async handleSubmit() {
    try {
      const { repositoryMethod, successMessage } = this.strategy;
      this.isLoading = true;
      const { data } = await ArticleRepository[repositoryMethod]({
        ...this.formData,
        userId: this.userId
      });
      this.openSnackbar({
        message: successMessage,
        type: 'success'
      });
      this.updateFeed(data);
      this.closeDialog();
    } catch (e) {
      this.openSnackbar({
        type: 'error',
        message: (e as Error).message || 'Erro inesperado'
      });
    } finally {
      this.isLoading = false;
    }
  }


  @Watch('isOpen')
  watchIsOpen(newValue: boolean) {
    if (!newValue) {
      this.formData = {
        id: 0,
        title: '',
        isValid: false,
        description: ''
      };
    }
  }

  closeDialog() {
    this.isOpen = false;

  }

  openDialog(article?: ArticleDTO) {
    this.isOpen = true;
    this.formData = {
      ...this.formData,
      ...article
    };
  }


  @Emit('updateFeed')
  updateFeed(article: ArticleDTO) {
    return article;
  }


  get strategy(): Strategy {
    if (this.formData.id) {
      return {
        title: 'Editar artigo',
        submitTitle: 'Editar',
        repositoryMethod: 'update',
        successMessage: 'Artigo atualizado com sucesso!'
      };
    }
    return {
      title: 'Criar artigo',
      submitTitle: 'Criar',
      repositoryMethod: 'create',
      successMessage: 'Artigo criado com sucesso!'
    };
  }

}
