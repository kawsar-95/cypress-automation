class HomePage {
  // Method to get the edit box input element
  getEditBox() {
    return cy.get('input[name="name"]:nth-child(2)');
  }

  // Method to get the two-way data binding element
  getTwoWayDataBinding() {
    return cy.get(':nth-child(4) > .ng-untouched');
  }

  // Method to get the gender select element
  getGender() {
    return cy.get('select');
  }

  // Method to get the entrepreneur radio button
  getEntrepreneaur() {
    return cy.get('#inlineRadio3');
  }

  // Method to get the shop tab link
  getShopTab() {
    return cy.get(':nth-child(2) > .nav-link');
  }
}

export default HomePage;