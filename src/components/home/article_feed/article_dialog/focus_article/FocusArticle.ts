import AbstractController from 'src/services/AbstractController';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { ArticleDTO } from 'src/repositories/ArticleRepository';

export interface FocusArticleRef extends Vue {
  openDialog(): void;
}

@Component({
  name: 'FocusArticle',
  components: {
    CommentSection: () => import('./comment_section/index.vue'),
    FeedItem: () => import('../../article/index.vue'),
    CloseIcon: () => import('src/components/global/close_icon/index.vue'),
  }
})
export default class FocusArticle extends AbstractController {
  @Prop({ type: Object, required: true }) article!: ArticleDTO;

  isOpen = false;

  openDialog() {
    this.isOpen = true;
  }

  closeDialog() {
    this.isOpen = false;
  }


  comments = [];

}

