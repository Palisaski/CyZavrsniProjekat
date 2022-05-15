const user = Cypress.env('user')

describe('Home page features', function() {

  beforeEach('Go to application', function(){
    cy.visit('/')
})

it('1. Add Fund', function(){
  cy.get('.theme-btn').contains('Login').click();
  cy.login(user);
  cy.get('.sidebar-menu-wrap').contains('Add Funds').click();
  cy.get('#gateway_paypal').click()
  cy.get('input[name=price]').clear().type('100')
  cy.get('button[type=submit]').contains('Pay Now').click()

})

it('2. Book a tour - 404 Error', function(){
  cy.get('.theme-btn').contains('Login').click()
  cy.login(user)
  cy.get('.main-menu-content').contains('Tours').click()
  cy.get('.destination-card').contains('Legoland Malaysia Day Pass').click({force: true})
  cy.get('button[type=submit]').contains('Book Now').click()
  cy.get('input[name=firstname]').click({force: true}).type('Milica',{force: true})
  cy.get('input[name=lastname]').click({force: true}).type('Palisaski',{force: true})
  cy.get('#gateway_stripe').check()
  cy.get('#agreechb').check({force: true})
  cy.get('button[type=submit]').contains('Confirm Booking').click({force: true})
  cy.get('.fadeInDown').should('have.text','404 ErrorPage not Found')
})

it('3. Lunch Discount', function(){
  cy.get('.theme-btn').contains('Login').click()
  cy.login(user)
  cy.get('.main-menu-content').contains('Offers').click()
  cy.get('.author__title').contains('Lunch Discount').click({force: true} )

}) 

it('4. Update Profile', function(){
  cy.get('.theme-btn').contains('Login').click()
  cy.login(user)
  cy.get('.sidebar-menu-wrap').contains('My Profile').click()
  cy.get('#select2-from_country-container').click().then( () => {
    cy.wait(1000)
    cy.get('.select2-search__field').type('Serbia', {force: true})
  cy.get('button[type=submit]').contains('Update Profile').click()

})


})})