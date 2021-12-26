import AbstractRepository from 'src/repositories/AbstractRepository';
import UserRepository, { UserDTO } from 'src/repositories/UserRepository';


export interface ArticleDTO {
  id: number;
  title: string;
  description: string;
  userId: number;
  createdAt: Date;
  user: UserDTO;
}


// TODO criar middleware para o json server para ele ler o Token no header
class ArticleRepository extends AbstractRepository {
  protected async findAuthor(userId: number) {
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

  async create(articleDTO: Omit<ArticleDTO, 'id' | 'createdAt'  | 'user'>) {
    const { data } = await this.api.post<ArticleDTO>('articles', {
      ...articleDTO,
      createdAt: new Date()
    } as ArticleDTO);
    const user = await this.findAuthor(data.userId);
    return {
      ...data,
      user
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
