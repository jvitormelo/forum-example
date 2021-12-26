import AbstractRepository from 'src/repositories/AbstractRepository';

export interface UserDTO {
  id: number
  username: string,
  password: string,
  email: string
}


class UserRepository extends AbstractRepository {
  async create({ password, email, username }: Omit<UserDTO, 'id'>) {
    return await this.api.post<UserDTO>('users', { password, email, username });
  }

  async find({ id, email }: Partial<UserDTO>) {
    return await this.api.get<UserDTO[]>('users', {
      params: {
        id,
        email
      }
    });
  }


  async index() {
    return await this.api.get('users');
  }

}

export default new UserRepository();
