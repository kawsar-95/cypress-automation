describe('My First Test Suite', function() {
  it('My First Test Case', function() {
    cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
      "name": "Learn Appium Automation with Java",
      "isbn": "bcggsss",
      "aisle": "2257",
      "author": "John Doe"
    }).then(function(response) {
      expect(response.body).to.have.property("Msg", "successfully added");
      expect(response.status).to.eq(200);
    });
  });
});