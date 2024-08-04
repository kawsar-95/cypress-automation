import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


const homePage = new HomePage()
const productPage = new ProductPage()
let name

Given('I open ECommerce Page', () => {
  cy.visit(Cypress.env('url') + "/angularpractice/")
})

When('I add items to Cart', function () {
  homePage.getShopTab().click()

  this.data.productName.forEach((element) => {
    cy.selectProduct(element)
  });

  productPage.checkOutButton().click()
})

When('Validate the total prices', () => {
  let sum = 0

  cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
    const amount = $el.text()
    const res = amount.split(" ")[1].trim()
    sum += Number(res)
  }).then(() => {
    cy.log(sum)
  })

  cy.get('h3 strong').then((element) => {
    const amount = element.text()
    const total = amount.split(" ")[1].trim()
    expect(Number(total)).to.equal(sum)
  })
})

Then('select the country submit and verify Thankyou', () => {
  cy.contains('Checkout').click()
  cy.get('#country').type('India')
  cy.get('.suggestions > ul > li > a').click()
  cy.get('#checkbox2').click({ force: true })
  cy.get('input[type="submit"]').click()

  cy.get('.alert').then((element) => {
    const actualText = element.text()
    expect(actualText.includes("Success")).to.be.true
  })
})

When('I fill the form details', function (dataTable) {
  name = dataTable.rawTable[1][0]
  homePage.getEditBox().type(dataTable.rawTable[1][0])
  homePage.getGender().select(dataTable.rawTable[1][1])
})

Then('validate the forms behaviour', function () {
  homePage.getTwoWayDataBinding().should('have.value', name)
  homePage.getEditBox().should('have.attr', 'minlength', '2')
  homePage.getEntrepreneaur().should('be.disabled')
  Cypress.config('defaultCommandTimeout', 8000)
})

Then('select the Shop Page', () => {
  homePage.getShopTab().click()
})
