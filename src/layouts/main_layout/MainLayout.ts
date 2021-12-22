import { Vue, Component } from 'vue-property-decorator';

@Component({
  name: 'MainLayout',
  components:{
    Navbar: () => import('../../components/layout/navbar/index.vue')
  }
})
export default class MainLayout extends Vue {


}
