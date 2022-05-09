describe('Home page features', function() {

  beforeEach('Go to application', function(){
    cy.visit('/')
});

it('1.Search hotels', function(){
  cy.get('#select2-hotels_city-container').click({force : true})
  cy.get('.select2-search__field').type('Madrid',{force : true}).then( () => {
    cy.wait(3000)
    cy.get('.select2-results__option').contains('Madrid,Spain').click()})
  cy.get('.guest_hotels').click({force : true})
  cy.get('#nationality').select('Tuvalu', {force : true})
  cy.get('button[type=submit]').contains('Search').click({force : true});
})
it('2. Feature tours - Looking through photo gallery', function() {
  cy.get('.card-item').contains('Sydney and Bondi Beach Explorer').click({force : true})
  cy.get('.theme-btn').contains('More Photos').click({force : true})
  cy.get('.fancybox-button--arrow_right').click()
})
it('3. Search Flight', function (){
  cy.visit('/')
  cy.get('.nav-item').contains('flights').click({force: true})
  cy.get('#round-trip').click({force: true})
  cy.get('#flight_type').select('Business', {force: true})
  cy.get('input[id=autocomplete]').click({force: true}).type('Beograd')
  cy.get('.autocomplete-location').contains('Belgrade, Serbia').click({force: true})
  cy.get('input[id=autocomplete2]').click({force: true}).type('Rio de Janeiro')
  cy.get('.autocomplete-location').contains('Rio De Janeiro, Brazil').click({force: true})
  //cy.get('#departure').click({force: true})
  //cy.get('.day ').contains('15').click({force: true})
  cy.get('.guest_flights').click({force: true})
  cy.get('button[type=button]').contains('Search').click({force : true});
})
})