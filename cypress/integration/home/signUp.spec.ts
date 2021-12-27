/// <reference types="cypress" />

// Um teste basico de cadastro, não criei nenhuma estrutura, só fui fazendo mesmo o teste.

import UserFactory from 'app/cypress/factories/UserFactory';


describe('Should register a new user', () => {
  it('Should visit the home page', () => {
    cy.visit('http://localhost:8080');
    cy.clearLocalStorage()
  });

  it('should click the sign up button', () => {
    cy.get('#sign-up-btn').should('exist').click();
    cy.get('#sign-up-dialog').should('exist').should('be.visible');
  });

  it('should fill the sign up form', () => {
    const user = UserFactory.create();
    cy.get('input[name="username"]').should('exist').type(user.username);
    cy.get('input[name="email"]').should('exist').type(user.email);
    cy.get('input[name="password"]').should('exist').type(user.password);
    cy.get('#form-sign-up-btn').should('exist').should('be.visible').click();
  });
});


