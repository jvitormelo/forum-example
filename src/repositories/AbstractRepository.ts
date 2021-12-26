import { AxiosInstance } from 'axios';
import api from 'src/services/api/api';
import UserRepository from 'src/repositories/UserRepository';

export default class AbstractRepository {
  protected api: AxiosInstance;

  constructor() {
    this.api = api;
  }



}

