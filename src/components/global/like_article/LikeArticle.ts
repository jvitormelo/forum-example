import AbstractController from 'src/services/AbstractController';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'LikeArticle'
})
export default class LikeArticle extends AbstractController {
  @Prop({ type: Number, default: () => 0, required: true }) articleId!: number;

  isLiked = false


  async createdHandler(): Promise<void> {
    this.checkIsLiked()
  }

  checkIfIsLiked(){

  }


}
