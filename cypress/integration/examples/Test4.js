// / <reference types="Cypress" />

describe('My Second Test Suite', () => {
  it('My First Test case', () => {
    // Check boxes
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get('#alertbtn').click();
    cy.get('[value="Confirm"]').click();

    // Window:alert
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Hello , share this practice page and share your knowledge');
    });

    // Window:confirm
    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Hello , Are you sure you want to confirm?');
    });

    cy.get('#opentab').invoke('removeAttr', 'target').click();
    cy.wait(7000);
    cy.url().should('contains', 'www.qaclickacademy.com/');
    cy.go('back');
  });
});
