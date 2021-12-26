import { AxiosRequestConfig } from 'axios';

interface IHandler {
  accept(request: any): boolean;

  execute(request: any): void;

}


export default class AbstractProcessor {
  handlers: IHandler[] = [];

  run(target: any) {
    this.handlers.forEach((handler) => {
      if (handler.accept(target)) {
        handler.execute(target);
      }
    });
  }
}
