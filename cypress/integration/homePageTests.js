describe('Home page features', function() {
  beforeEach('Go to application', function(){
    cy.visit('/')
})});

  it('1. Search Hotels', function() {
    cy.visit('/')
    cy.get('#select2-hotels_city-container').click({force : true})
    cy.get('.select2-search__field').type('Madrid',{force : true}).then( () => {
      cy.wait(3000)
      cy.get('.select2-results__option').contains('Madrid,Spain').click()
    })
    cy.get('.guest_hotels').click({force : true})
    cy.get('#nationality').select('Tuvalu', {force : true})
    cy.get('button[type=submit]').contains('Search').click({force : true});
    

  it('2. Feature tours - Looking through photo gallery', function() {
      cy.visit('/')
      cy.get('.card-item').contains('Sydney and Bondi Beach Explorer').click({force : true})
      cy.get('.theme-btn').contains('More Photos').click({force : true})
      cy.get('.fancybox-button--arrow_right').click()
    })})

  