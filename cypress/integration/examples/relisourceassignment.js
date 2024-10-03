describe('Handling Dropdowns in Cypress', () => {
  // Ignore uncaught exceptions from the application
  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('Sys is not defined')) {
        return false;
      }
    });
  });

  it('Should select a country from the auto-suggest dropdown', () => {
    // Visit the website
    cy.visit('https://rahulshettyacademy.com/dropdownsPractise/');

    // Type in the country name and select the correct country from the auto-suggest list
    cy.get('#autosuggest').type('ban');
    cy.get("ul#ui-id-1 li").contains('Bangladesh').click();

    // Assert the country was selected successfully
    cy.get('#autosuggest').should('have.value', 'Bangladesh');
  });
});
