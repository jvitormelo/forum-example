import AbstractRepository from 'src/repositories/AbstractRepository';

interface IsLikedParams {
  articleId: number
  userId: number
}

class LikeArticleRepository extends AbstractRepository {
  //TODO remover o userID no futuro
  async isLiked(){
    return  this.api.get('likes', {
      params:{

      }
    })
  }


}
