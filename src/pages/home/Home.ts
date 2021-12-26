import { Component, Vue } from 'vue-property-decorator';

@Component({
  name:'Home',
  components:{
    Feed: () => import('../../components/home/feed/index.vue'),
    Header: () => import('../../components/home/header/index.vue'),

  }
})
export default class Home extends Vue{

}
