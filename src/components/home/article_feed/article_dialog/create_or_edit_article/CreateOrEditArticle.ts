import AbstractController from 'src/services/AbstractController';
import { Component, Emit, Vue, Watch } from 'vue-property-decorator';
import ArticleRepository from 'src/repositories/ArticleRepository';
import { State } from 'vuex-class';
import { required } from 'src/utils/formRules';
import { UserDTO } from 'src/types/DTOs/UserDTO';
import { ArticleDTO } from 'src/types/DTOs/ArticleDTO';
import { errorMessages } from 'src/utils/feedbackMessages/errorMessages';


export interface CreateOrEditArticleRef extends Vue {
  openDialog(article?: ArticleDTO): void;
}

interface Strategy {
  title: string,
  submitTitle: string,
  repositoryMethod: 'create' | 'update'
  successMessage: string
}

@Component({
  name: 'CreateOrEditArticle',
  components: { CloseIcon: () => import('src/components/global/close_icon/index.vue'), Input: () => import('src/components/global/input/index.vue') }
})
export default class CreateOrEditArticle extends AbstractController {
  @State(state => state.User.user) user!:UserDTO

  isOpen = false;

  formData = {
    id: 0,
    title: '',
    description: '',
    isValid: false
  };

  get formRules(){
    return {
      title: [required],
      description: [required]
    }
  }

  isLoading = false;

  async handleSubmit() {
    try {
      const { repositoryMethod, successMessage } = this.strategy;
      this.isLoading = true;
      const article = await ArticleRepository[repositoryMethod]({
        ...this.formData,
        userId: this.user.id,
        user: this.user
      });
      this.openSnackbar({
        message: successMessage,
        type: 'success'
      });
      this.updateFeed(article);
      this.closeDialog();
    } catch (e) {
      this.openSnackbar({
        type: 'error',
        message: (e as Error).message || errorMessages.unexpected
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
        submitTitle: 'Salvar',
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
