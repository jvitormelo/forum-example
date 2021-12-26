import AbstractRepository from 'src/repositories/AbstractRepository';
import { LikeDTO } from 'src/types/DTOs/LikeDTO';

class LikeArticleRepository extends AbstractRepository {
  async getAllLikes(articleId: number) {
    const { data } = await this.api.get<LikeDTO[]>('likes', {
      params: {
        articleId
      }
    });

    return data.length;
  }

  async isLiked(params: Omit<LikeDTO, 'id' | 'createdAt'>) {
    const { data } = await this.api.get<LikeDTO[]>('likes', {
      params
    });

    return data[0]?.id || 0;
  }

  async create(data: Omit<LikeDTO, 'id' | 'createdAt'>) {
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
