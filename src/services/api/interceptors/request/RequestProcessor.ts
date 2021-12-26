import { AxiosRequestConfig } from 'axios';
import AbstractProcessor from 'src/services/api/interceptors/AbstractProcessor';
import AuthorizationHandler from 'src/services/api/interceptors/request/AuthorizationHandler';

interface IHandler {
  accept(request: AxiosRequestConfig): boolean;

  execute(request: AxiosRequestConfig): void;
}


class RequestProcessor extends AbstractProcessor {

  handlers: IHandler[] = [
    AuthorizationHandler
  ];

  run(request: AxiosRequestConfig) {
    this.handlers.forEach((handler) => {
      if (handler.accept(request)) {
        handler.execute(request);
      }
    });
    return request
  }
}

export default new RequestProcessor();
