import AbstractController from 'src/services/AbstractController';
import { Component, Inject, Prop, Watch } from 'vue-property-decorator';
import LikeArticleRepository from 'src/repositories/LikeArticleRepository';
import { Getter } from 'vuex-class';
import { ToggleAuthenticationDialog } from 'layouts/main_layout/MainLayout';

@Component({
  name: 'LikeArticle'
})
export default class LikeArticle extends AbstractController {
  @Getter('User/isAuthenticated') isAuthenticated!: boolean;
  @Getter('User/userId') userId!: number;
  @Prop({ type: Number, required: true }) articleId!: number;
  @Inject('toggleAuthenticationDialog') toggleAuthenticationDialog!: ToggleAuthenticationDialog;

  likeId = 0;
  numberOfLikes = 0;


  get isLiked() {
    return !!this.likeId;
  }

  async createdHandler(): Promise<void> {
    await this.getAllLikes();
  }

  async getAllLikes() {
    try {
      this.numberOfLikes = await LikeArticleRepository.getAllLikes(this.articleId);
    } catch (e) {
      this.numberOfLikes = 0;
    }
  }


  @Watch('userId', {deep:true, immediate:true})
  async checkIfIsLiked() {

    if (!this.userId) {
      return this.likeId = 0;
    }

    this.likeId = await LikeArticleRepository.isLiked({
      articleId: this.articleId,
      userId: this.userId
    });
  }


  async handleClick() {
    if (!this.isAuthenticated) {
      return this.toggleAuthenticationDialog('signUp');
    }
    await this.strategy.action();
  }

  async likeArticle() {
    this.likeId = await LikeArticleRepository.create({
      articleId: this.articleId,
      userId: this.userId
    });
    this.numberOfLikes++;
  }


  async dislikeArticle() {
    await LikeArticleRepository.delete(this.likeId);
    this.likeId = 0;
    this.numberOfLikes--;
  }


  get strategy() {
    if (this.isLiked) return {
      color: 'primary',
      action: () => this.dislikeArticle()
    };

    return {
      color: '',
      action: () => this.likeArticle()
    };
  }

}
