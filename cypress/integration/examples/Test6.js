/// <reference types="Cypress" />

describe('My Second Test Suite', () => {
  it('My First Test case', () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.contains('Top').click({ force: true })
    cy.url().should('include', 'top')
  })
})
