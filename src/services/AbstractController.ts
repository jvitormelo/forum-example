import { Vue } from 'vue-property-decorator';

export default class AbstractController extends Vue{

  async createHandler(){

  }

  async created(){
    await  this.createHandler()
  }
}
