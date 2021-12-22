import { Component, Vue } from 'vue-property-decorator';

@Component({
  name:'Home',
  components:{
    Header: () => import('../../components/home/header/index.vue'),

  }
})
export default class Home extends Vue{

}
