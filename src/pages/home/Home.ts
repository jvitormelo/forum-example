import { Component, Vue } from 'vue-property-decorator';


@Component({
  name: 'Home',
  components: {
    Feed: () => import('components/home/article_feed/index.vue'),
  }
})
export default class Home extends Vue {

}
