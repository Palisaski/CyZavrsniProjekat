const agent = Cypress.env('agent')

describe('Home page features', function() {
  beforeEach('Go to application', function(){
    cy.visit('/')
})});

it('1. ', function() {
  cy.login(agent);
  cy.get('.sidebar-menu > list-items').contains('Add Funds')

} )