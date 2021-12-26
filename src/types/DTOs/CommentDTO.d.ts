import { UserDTO } from 'src/types/DTOs/UserDTO';

export interface CommentDTO {
  id: number;
  articleId: number,
  message: string,
  userId: number
  user: UserDTO
  createdAt: Date
}
