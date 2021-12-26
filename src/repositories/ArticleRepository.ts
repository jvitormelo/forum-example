import AbstractRepository from 'src/repositories/AbstractRepository';
import UserRepository from 'src/repositories/UserRepository';
import { ArticleDTO } from 'src/types/DTOs/ArticleDTO';

class ArticleRepository extends AbstractRepository {
  private async findAuthor(userId: number) {
    const { data } = await UserRepository.find({ id: userId });
    return data[0];
  }

  async index() {
    const { data } = await this.api.get<ArticleDTO[]>('articles');
    const articlePromises = data.map(async (article) => {
      const { data: user } = await UserRepository.find({ id: article.userId });
      return {
        ...article,
        user: user[0]
      };
    });
    return Promise.all(articlePromises);
  }

  async create(articleDTO: Omit<ArticleDTO, 'id' | 'createdAt' >) {
    const { data } = await this.api.post<ArticleDTO>('articles', {
      ...articleDTO,
      createdAt: new Date()
    } as ArticleDTO)
    return {
      ...data,
      user: articleDTO.user
    };

  }

  async update(articleDTO: Omit<ArticleDTO, 'createdAt' | 'user'>) {
    const { data } =  await  this.api.put<ArticleDTO>(`articles/${articleDTO.id}`, articleDTO);
    const user = await this.findAuthor(data.userId)
    return {
      ...data,
      user
    }
  }

  delete(articleId: number) {
    return this.api.delete<ArticleDTO>(`articles/${articleId}`);
  }
}

export default new ArticleRepository();
