import { AxiosInstance } from 'axios';
import api from 'src/services/api/api';

export default class AbstractRepository {
  protected api: AxiosInstance;

  constructor() {
    this.api = api;
  }
}

