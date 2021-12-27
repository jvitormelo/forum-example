import AbstractFactory from 'app/cypress/factories/AbstractFactory';

class ArticleFactory extends AbstractFactory{
  create(){
    return {
      title: this.fakerHandler.random.words(2),
      description: this.fakerHandler.random.words(20),
    }
  }
}

export default new ArticleFactory()
