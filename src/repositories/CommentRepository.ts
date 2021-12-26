import AbstractRepository from 'src/repositories/AbstractRepository';
import UserRepository, { UserDTO } from 'src/repositories/UserRepository';



export interface CommentDTO {
  id: number;
  articleId: number,
  message: string,
  userId: number
  user: UserDTO
  createdAt: Date
}

class CommentRepository extends AbstractRepository {
  async create({ message, userId, articleId }: Omit<CommentDTO, 'user' | 'createdAt' | 'id'>) {
    const [{ data: comment }, { data: user }] = await Promise.all([this.api.post<CommentDTO>('comments', {
      articleId,
      message,
      userId,
      createdAt: new Date()
    }), UserRepository.find({ id: userId })]);

    return {
      ...comment,
      user: user[0]
    };
  }

  async index(articleId: number) {
    const { data } = await this.api.get<CommentDTO[]>('comments', { params: { articleId } });

    const promises = data.map(async (comment) => {
      const { data: user } = await UserRepository.find({ id: comment.userId });
      return {
        ...comment,
        user: user[0]
      };
    });

    return Promise.all(promises);

  }
}

export default new CommentRepository();
