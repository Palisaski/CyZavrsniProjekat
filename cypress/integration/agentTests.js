const agent = Cypress.env('agent')

describe('Home page features', function() {
  beforeEach('Go to application', function(){
    cy.visit('/')
})});

it('1. Add fund', function() {
  cy.visit('/');
  cy.get('.theme-btn').contains('Login').click();
  cy.login(agent);
  cy.get('button[type=submit]').contains('Login').click({ force: true });
  cy.get('.sidebar-menu-wrap').contains('Add Funds').click();
  cy.get('#gateway_paypal').click()
  cy.get('input[name=price]').clear().type('100')
  cy.get('button[type=submit]').contains('Pay Now').click()

} )