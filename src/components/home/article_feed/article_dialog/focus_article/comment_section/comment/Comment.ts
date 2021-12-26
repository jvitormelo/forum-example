import AbstractController from 'src/services/AbstractController';
import { Component, Prop } from 'vue-property-decorator';

import { formatDateTo } from 'src/utils/converters';
import { CommentDTO } from 'src/types/DTOs/CommentDTO';

@Component({
  name: 'Comment',
  components: {
    UserName: () => import('../../../../article/user_name/index.vue')
  }
})
export default class Comment extends AbstractController {
  @Prop({ type: Object, required: true, default: () => ({}) })
  comment!: CommentDTO;


  get username() {
    return this.comment.user?.username || '';
  }


  get formatDate() {
    return formatDateTo;
  }

}
