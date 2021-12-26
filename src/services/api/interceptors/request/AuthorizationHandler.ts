import { AxiosRequestConfig } from 'axios';
import TokenHandler from 'src/utils/TokenHandler';


class AuthorizationHandler {
  accept() {
    return true;
  }

  execute(request: AxiosRequestConfig) {
    request.headers['Authorization'] = TokenHandler.getToken();
  }
}

export default new AuthorizationHandler();
