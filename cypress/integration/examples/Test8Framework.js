// / <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage';
import ProductPage from '../../support/pageObjects/ProductPage';

describe('My Second Test Suite', function () {
  before(function () {
    // runs once before all tests in the block
    cy.fixture('example').then((data) => {
      this.data = data;
    });
  });

  it('My FirstTest case', function () {
    const homePage = new HomePage();
    const productPage = new ProductPage();
    cy.visit(Cypress.env('url') + "/angularpractice/");

    // Interact with Home Page
    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getTwoWayDataBinding().should('have.value', this.data.name);
    homePage.getEditBox().should('have.attr', 'minlength', '2');
    homePage.getEntrepreneaur().should('be.disabled');
    homePage.getShopTab().click();
    Cypress.config('defaultCommandTimeout', 8000);

    // Select Products
    this.data.productName.forEach((element) => {
      cy.selectProduct(element);
    });

    // Checkout Process
    productPage.checkOutButton().click();
    let sum = 0;

    cy.get('tr td:nth-child(4) strong').each(($el) => {
      const amount = $el.text();
      const res = amount.split(" ")[1].trim();
      sum += Number(res);
    }).then(() => {
      cy.log(sum);
    });

    cy.get('h3 strong').then((element) => {
      const amount = element.text();
      const total = amount.split(" ")[1].trim();
      expect(Number(total)).to.equal(sum);
    });

    cy.contains('Checkout').click();
    cy.get('#country').type('India');
    cy.get('.suggestions > ul > li > a').click();
    cy.get('#checkbox2').click({ force: true });
    cy.get('input[type="submit"]').click();

    // Verify Success Message
    cy.get('.alert').then((element) => {
      const actualText = element.text();
      expect(actualText.includes("Success")).to.be.true;
    });
  });
});