import { Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import AbstractController from 'src/services/AbstractController';
import ArticleRepository, { ArticleDTO } from 'src/repositories/ArticleRepository';
import { ArticleDialogRef } from 'components/home/feed/article_dialog/ArticleDialog';


export type OpenArticleDialog = (article?: ArticleDTO) => void

@Component({
  name: 'ArticleFeed',
  components: {
    FeedItem: () => import('./feed_item/index.vue'),
    ArticleDialog: () => import('./article_dialog/index.vue')
  }
})
export default class Feed extends AbstractController {
  @Getter('User/userId') userId!: number;
  @Getter('User/isAuthenticated') isAuthenticated!: boolean;

  $refs!: {
    articleDialog: ArticleDialogRef
  };

  onlyArticlesCreatedAuthenticatedUser = false;

  articles: ArticleDTO[] = [];

  get computedArticles() {
    if (this.onlyArticlesCreatedAuthenticatedUser) {
      return this.articles.filter((article) => article.userId === this.userId);
    }
    return this.articles;
  }

  async createdHandler(): Promise<void> {
    await this.getAllArticles();
  }

  async getAllArticles() {
    try {
      const { data } = await ArticleRepository.index();
      this.articles = data;
    } catch (e) {
      this.openSnackbar({
        message: (e as Error).message || 'Erro inesperado',
        type: 'error'
      });
    }

  }

  createArticleHandler() {
    if (!this.isAuthenticated) {
      return this.handleNotAuthenticatedUser();
    }

    this.openArticleDialog();
  }

  handleNotAuthenticatedUser() {
    this.openSnackbar({
      type: 'error',
      message: 'É preciso estar logado'
    });
  }

  openArticleDialog(article?: ArticleDTO) {
    this.$refs.articleDialog.openDialog(article);
  }

  handleReceivedArticle(receivedArticle: ArticleDTO) {
    const foundArticleIndex = this.findArticleIndex(receivedArticle.id);
    if (foundArticleIndex >= 0) {
      this.articles.splice(foundArticleIndex, 1, receivedArticle);
    } else {
      this.articles.push(receivedArticle);
    }
  }

  private findArticleIndex(articleId: number) {
    return this.articles.findIndex((article) => articleId === article.id);
  }

  removeArticle(articleId: number) {
    const foundArticleIndex = this.findArticleIndex(articleId);
    this.articles.splice(foundArticleIndex, 1);
  }
}
