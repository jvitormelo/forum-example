import { AxiosRequestConfig } from 'axios';
import AuthorizationHandler from 'src/services/api/interceptors/request/AuthorizationHandler';

interface IHandler {
  accept(request: AxiosRequestConfig): boolean;

  execute(request: AxiosRequestConfig): void;
}


class RequestProcessor  {
  handlers: IHandler[] = [
    AuthorizationHandler
  ];

  run(request: AxiosRequestConfig) {
    this.handlers.forEach((handler) => {
      if (handler.accept(request)) {
        handler.execute(request);
      }
    });
  }
}

export default new RequestProcessor();
