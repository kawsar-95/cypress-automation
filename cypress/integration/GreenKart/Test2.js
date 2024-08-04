// / <reference types="Cypress" />

describe('My Second Test Suite', function () {
  it('My First Test case', function () {
    console.log("starting text");
    cy.visit("https://rahulshettyacademy.com");
    cy.get('.search-keyword').type('ca');
    cy.wait(2000);

    // Parent child chaining
    cy.get('.products')
      .as('productLocator')
      .find('.product')
      .each(($el, index, $list) => {
        const textVeg = $el.find('h4.product-name').text();
        if (textVeg.includes('Cashews')) {
          $el.find('button').click();
        }
      });

    cy.get('.cart-icon > img').click();
    cy.contains('PROCEED TO CHECKOUT').click();
    // cy.contains('Place Order').click();
  });
});
