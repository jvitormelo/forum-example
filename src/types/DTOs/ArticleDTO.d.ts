import { UserDTO } from 'src/types/DTOs/UserDTO';

//O ideal seria usar classes, mas eu tava meio sem tempo

export interface ArticleDTO {
  id: number;
  title: string;
  description: string;
  userId: number;
  createdAt: Date;
  user: UserDTO;
}
