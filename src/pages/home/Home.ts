import { Component, Vue } from 'vue-property-decorator';

@Component({
  name:'Home',
  components:{
    Header: () => import('./components/header/index.vue'),
    Navbar: () => import('./components/navbar/index.vue')
  }
})
export default class Home extends Vue{

}
