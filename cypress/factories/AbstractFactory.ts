import faker from 'faker';

export default class AbstractFactory {
  protected fakerHandler: typeof faker;

  constructor() {
    this.fakerHandler = faker;
    this.fakerHandler.locale = 'pt_BR';
  }

}
