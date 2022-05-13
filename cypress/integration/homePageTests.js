

describe('Home page features', function() {

  beforeEach('Go to application', function(){
    cy.visit('/')
});

it('1. Search hotels', function(){
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
  cy.get('.nav-item').contains('flights').click({force: true})
  cy.get('#round-trip').click({force: true})
  cy.get('#flight_type').select('Business', {force: true})
  cy.get('input[id=autocomplete]').click({force: true}).type('Beograd')
  cy.get('.autocomplete-location').contains('Belgrade, Serbia').click({force: true})
  cy.get('input[id=autocomplete2]').click({force: true}).type('Rio de Janeiro')
  cy.get('.autocomplete-location').contains('Rio De Janeiro, Brazil').click({force: true})
  cy.get('.guest_flights').click({force: true})
  cy.get('button[type=button]').contains('Search').click({force : true});
})

it('4. Booking a Featured Hotel', function(){
  cy.get('.hotel-card-wrap').contains('Islamabad').click({force: true})
  cy.get('button[type=submit]').contains('Book').click({force : true})
  cy.get('input[name=firstname]').click({force: true}).type('Milica')
  cy.get('input[name=lastname]').click({force: true}).type('Palisaski')
  cy.get('input[name=email]').click({force: true}).type('vacation@yahoo.com')
  cy.get('input[name=phone]').click({force: true}).type('11111111')
  cy.get('input[name=address]').click({force: true}).type('Knez Mihailova')
  cy.get('input[name=firstname_1]').click({force: true}).type('Milica')
  cy.get('input[name=lastname_1]').click({force: true}).type('Palisaski')
  cy.get('#gateway_stripe').check()
  cy.get('#agreechb').check({force: true})
  cy.get('button[type=submit]').contains('Confirm Booking').click({force : true})
})
  it.only('5. Search hotels', function(){
    //cy.intersept('GET', 'https://ipwhois.app/json/').as('ipwhois')
    
    cy.get('#hotels-tab').click({force: true})
    cy.get('#select2-hotels_city-container').click({force: true})
    cy.get('.select2-search__field').type('Dubai',{force: true}).then ( () => {
      cy.wait(2000)
      cy.get('.select2-results__option').contains('Dubai,United Arab Emirates').click()
    })
    cy.get('button[type=submit]').contains(' Search').click({force : true})
    cy.get('.sec__title_list').should('have.text','Search Hotels in dubai')


  it('6. Change currency', function(){
    cy.get('.btn').contains('USD').click()
    cy.get('.dropdown-item').contains('JPY').click({force: true})
  })

})})