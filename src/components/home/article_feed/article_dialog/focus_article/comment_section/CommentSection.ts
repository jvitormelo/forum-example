import AbstractController from 'src/services/AbstractController';
import { Component, Inject, Prop } from 'vue-property-decorator';
import CommentRepository, { CommentDTO } from 'src/repositories/CommentRepository';
import { Getter } from 'vuex-class';
import { ToggleAuthenticationDialog } from 'layouts/main_layout/MainLayout';


@Component({
  name: 'CommentSection',
  components: {  Comment: () => import('./comment/index.vue') }
})
export default class CommentSection extends AbstractController {
  @Getter('User/isAuthenticated') isAuthenticated!: boolean;
  @Inject('toggleAuthenticationDialog') toggleAuthenticationDialog!: ToggleAuthenticationDialog;

  @Prop({ type: Number, default: () => 0, required: true }) articleId!: number;

  @Getter('User/userId') userId!: number;

  comments: CommentDTO[] = [];

  formData = {
    message: ''
  };

  async createComment() {
    try {
      if (!this.formData.message) return;
      //TODO remover o userId
      const comment = await CommentRepository.create({
        message: this.formData.message,
        userId: this.userId,
        articleId: this.articleId
      });
      this.comments.push(comment)
      this.openSnackbar({
        type: 'success',
        message: 'Mensagem enviada com sucesso!'
      });
      this.formData.message = '';
    } catch (e) {
      this.openSnackbar({
        type: 'error',
        message: 'Erro inesperado'
      });
    }
  }


  async createdHandler(): Promise<void> {
    await this.getComments()
  }

  async getComments() {
    this.comments = await CommentRepository.index(this.articleId)
  }
}
