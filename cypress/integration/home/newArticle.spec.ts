// TODO achar uma maneira melhor de reaproveitar outro teste
import './signUp.spec'
import ArticleFactory from 'app/cypress/factories/ArticleFactory';


describe('should create a article', () => {
      it('Should click the new article button', () => {
        cy.get('#new-article-btn').should('exist').should('be.visible').click();
        cy.get('#create-or-edit-article-dialog').should('exist').should('be.visible');
      });
      it('should input the article form', () => {

        const article = ArticleFactory.create()
        cy.get('input[name="title"]').type(article.title);
        cy.get('div[contenteditable="true"]').type(article.description);
        cy.get('button[type="submit"]').should('exist').should('be.visible').click()
      });
  }
);
