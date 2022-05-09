const agent = Cypress.env('agent')

describe('Home page features', function() {

  beforeEach('Go to application', function(){
    cy.visit('/')
});

it('1. Add Fund', function() {

  cy.get('.theme-btn').contains('Login').click();
  cy.login(agent);
  cy.get('button[type=submit]').contains('Login').click({ force: true });
  cy.get('.sidebar-menu-wrap').contains('Add Funds').click();
  cy.get('#gateway_paypal').click()
  cy.get('input[name=price]').clear().type('100')
  cy.get('button[type=submit]').contains('Pay Now').click()

})

it('2. Successfully Update Profile', function(){
  cy.get('.theme-btn').contains('Login').click();
  cy.login(agent);
  cy.get('button[type=submit]').contains('Login').click({ force: true });
  cy.get('.sidebar-menu-wrap').contains('My Profile').click();
  cy.get('#select2-from_country-container').click().then( () => {
    cy.wait(1000)
    cy.get('.select2-search__field').type('Serbia', {force: true});
  cy.get('button[type=submit]').contains('Update Profile').click();
  cy.get('.alert > alert-success')
    
})})})