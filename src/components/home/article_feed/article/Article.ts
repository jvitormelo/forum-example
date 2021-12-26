import { Component, Emit, Inject, Prop } from 'vue-property-decorator';
import ArticleRepository from 'src/repositories/ArticleRepository';
import { Getter } from 'vuex-class';
import AbstractController from 'src/services/AbstractController';
import { OpenArticle, RemoveArticle } from 'components/home/article_feed/ArticleFeed';
import { formatDateTo } from 'src/utils/converters';
import { ArticleDTO } from 'src/types/DTOs/ArticleDTO';
import { errorMessages } from 'src/utils/feedbackMessages/errorMessages';
import { successMessages } from 'src/utils/feedbackMessages/successMessages';

@Component({
  name: 'Article',
  components: {
    UserName: () => import('src/components/home/article_feed/article/user_name/index.vue'),
    LikeArticle: () => import('src/components/home/article_feed/article/like_article/index.vue')
  }
})
export default class Article extends AbstractController {
  @Prop({ type: Boolean, required: false, default: () => false }) isOnFeed!: boolean;

  @Inject('focusArticle') focusArticle!: OpenArticle;
  @Inject('openCreateOrEditArticleDialog') openCreateOrEditArticleDialog!: OpenArticle;
  @Inject('removeArticle') removeArticle!: RemoveArticle;

  @Getter('User/userId') userId!: number;
  @Prop({ type: Object, required: true }) article !: ArticleDTO;


  loadingController = {
    delete: false,
    like: false
  };

  setLoading(loadingKey: 'delete' | 'like', value: boolean) {
    this.loadingController[loadingKey] = value;
  }

  get isLoggedUserAuthor() {
    return this.article.userId === this.userId;
  }

  get formatDate(){
    return formatDateTo
  }



  handleComment() {
    this.focusArticle(this.article)

  }



  handleEdit() {
    this.openCreateOrEditArticleDialog(this.article)
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
          message: successMessages.articleDeleted,
          type: 'success'
        });
        this.$emit('articleDeleted')
      } catch (e) {
        this.openSnackbar({
          message: errorMessages.deleteArticle,
          type: 'error'
        });
      } finally {
        this.setLoading('delete', false);
      }
    });


  }


}
