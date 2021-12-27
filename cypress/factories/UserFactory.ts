import AbstractFactory from 'app/cypress/factories/AbstractFactory';


class UserFactory extends AbstractFactory{


  create() {
    return {
      username:  this.fakerHandler.name.firstName(),
      password: '123456',
      email: this.fakerHandler.internet.email()
    };
  }

}

export default new UserFactory();
