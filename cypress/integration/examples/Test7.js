// / <reference types="Cypress" />

describe('My Second Test Suite', () => {
  it('My First Test case', () => {
    // Check boxes
    cy.visit(`${Cypress.env('url')}/AutomationPractice/`);

    cy.get('#opentab').then((el) => {
      const url = el.prop('href');
      cy.log(url);
      // cy.visit(url);
      // rahulshettyacademy.com/seleniumpractise
    });
  });
});
