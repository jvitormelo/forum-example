import AbstractRepository from 'src/repositories/AbstractRepository';



interface IsLikedParams {
  articleId: number;
  userId: number;
}

interface LikeDTO  extends IsLikedParams{
  id: number;
  createdAt:Date;

}

class LikeArticleRepository extends AbstractRepository {
  //TODO remover o userID no futuro


  async getAllLikes(articleId: number) {
    const { data } = await this.api.get<LikeDTO[]>('likes', {
      params: {
        articleId
      }
    });

    return data.length;
  }

  async isLiked(params: IsLikedParams) {
    console.log('chamou');
    const { data } = await this.api.get<LikeDTO[]>('likes', {
      params
    });

    return data[0]?.id || 0;
  }


  async create(data: IsLikedParams) {
    const { data: like } = await this.api.post<LikeDTO>('likes', {
      ...data,
      createdAt: new Date()
    });
    return like?.id || 0;
  }

  async delete(likeId: number) {
    return this.api.delete(`likes/${likeId}`);
  }

}

export default new LikeArticleRepository();
