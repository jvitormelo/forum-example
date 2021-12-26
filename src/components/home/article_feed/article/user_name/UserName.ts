import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'UserName'
})
export default class UserName extends Vue {
 @Prop({type:String, default:() => '', required:true})username!:string


  get iconURL(){
   return `https://ui-avatars.com/api/?name=${this.username}`
  }
}
