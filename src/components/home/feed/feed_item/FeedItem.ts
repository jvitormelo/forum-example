import { Component, Emit, Prop } from 'vue-property-decorator';
import ArticleRepository, { ArticleDTO } from 'src/repositories/ArticleRepository';
import { Getter } from 'vuex-class';
import AbstractController from 'src/services/AbstractController';

@Component({
  name: 'FeedItem'
})
export default class FeedItem extends AbstractController {
  @Getter('User/userId') userId!: number;
  @Prop({ type: Object, required: true }) article !: ArticleDTO;


  isLoading = {
    delete: false,
    like: false
  };

  setLoading(loadingKey: 'delete' | 'like', value: boolean) {
    this.isLoading[loadingKey] = value;
  }

  get isLoggedUserAuthor() {
    return this.article.userId === this.userId;
  }


  handleLike() {
  }

  handleComment() {
  }

  @Emit('editArticle')
  handleEdit() {
    return this.article;
  }


  handleDelete() {
    this.$q.dialog({
      title: 'Tem certeza que deseja excluir?'
    }).onOk(async () => {
      try {
        this.setLoading('delete', true);
        const articleId = this.article.id;
        await ArticleRepository.delete(articleId);
        this.removeArticle(articleId);
        this.openSnackbar({
          message: 'Artigo deletado com sucesso!',
          type: 'success'
        });
      } catch (e) {
        this.openSnackbar({
          message: 'Não foi possível deletar o artigo!',
          type: 'error'
        });
      } finally {
        this.setLoading('delete', false);
      }
    });


  }


  @Emit('removeArticle')
  removeArticle(articleId: number) {
    return articleId;
  }

}
