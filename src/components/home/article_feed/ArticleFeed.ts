import { Component, Inject, Provide } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import AbstractController from 'src/services/AbstractController';
import ArticleRepository from 'src/repositories/ArticleRepository';
import {
  CreateOrEditArticleRef
} from 'components/home/article_feed/article_dialog/create_or_edit_article/CreateOrEditArticle';
import { ToggleAuthenticationDialog } from 'layouts/main_layout/MainLayout';
import {
  FocusArticleRef
} from 'components/home/article_feed/article_dialog/focus_article/FocusArticle';
import { ArticleDTO } from 'src/types/DTOs/ArticleDTO';
import { errorMessages } from 'src/utils/feedbackMessages/errorMessages';


export type OpenArticle = (article: ArticleDTO) => void
export type RemoveArticle = (articleId: number) => void

@Component({
  name: 'ArticleFeed',
  components: {
    FeedItem: () => import('./article/index.vue'),
    ArticleDialog: () => import('./article_dialog/create_or_edit_article/index.vue'),
    FocusArticleDialog: () => import('./article_dialog/focus_article/index.vue')
  }
})
export default class ArticleFeed extends AbstractController {
  @Getter('User/userId') userId!: number;
  @Getter('User/isAuthenticated') isAuthenticated!: boolean;
  @Inject('toggleAuthenticationDialog') toggleAuthenticationDialog!: ToggleAuthenticationDialog;

  $refs!: {
    articleDialog: CreateOrEditArticleRef
    focusArticle: FocusArticleRef
  };


  activeArticleId = 0;


  get activeArticle() {
    return this.articles.find((article) => this.activeArticleId === article.id) || {};
  }

  articles: ArticleDTO[] = [];


  get maxWidth() {
    return this.isMobile ? '90vw' : '50vw';
  }

  async createdHandler(): Promise<void> {
    await this.getAllArticles();
  }

  async getAllArticles() {
    try {
      this.articles = await ArticleRepository.index();
    } catch (e) {
      this.openSnackbar({
        message: (e as Error).message || errorMessages.unexpected,
        type: 'error'
      });
    }

  }


  @Provide('focusArticle')
  focusArticle(article: ArticleDTO) {
    this.activeArticleId = article.id;
    this.$refs.focusArticle.openDialog();
  }

  createArticleHandler() {
    if (!this.isAuthenticated) {
      return this.toggleAuthenticationDialog('signUp');
    }

    this.openCreateOrEditArticleDialog();
  }


  @Provide('openCreateOrEditArticleDialog')
  openCreateOrEditArticleDialog(article?: ArticleDTO) {
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


  @Provide('removeArticle')
  removeArticle(articleId: number) {
    const foundArticleIndex = this.findArticleIndex(articleId);
    this.articles.splice(foundArticleIndex, 1);
  }
}
