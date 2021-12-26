import AbstractRepository from 'src/repositories/AbstractRepository';


export interface ArticleDTO {
  id: number;
  title: string;
  description: string;
  userId: number;
  createdAt: Date;
}

// TODO criar middleware para o json server para ele ler o Token no header
class ArticleRepository extends AbstractRepository {
  index() {
    console.log('chamou');
    return this.api.get<ArticleDTO[]>('articles');
  }

  create(articleDTO: Omit<ArticleDTO, 'id' | 'createdAt'>) {
    return this.api.post<ArticleDTO>('articles', {
      ...articleDTO,
      createdAt: new Date()
    } as ArticleDTO);
  }

  update(articleDTO: Omit<ArticleDTO, 'createdAt'>) {
    return this.api.put<ArticleDTO>(`articles/${articleDTO.id}`, articleDTO);
  }

  delete(articleId: number) {
    return this.api.delete<ArticleDTO>(`articles/${articleId}`);
  }
}

export default new ArticleRepository();
