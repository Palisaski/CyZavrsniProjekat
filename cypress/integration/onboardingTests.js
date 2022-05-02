describe('Onboarding Test Suite', function() {
    beforeEach('Go to application', function(){
      cy.visit('/')
  });
  
  it.only('1. Log in as a user', function(){
    cy.get('.theme-btn').contains('Login').click();
    cy.get('input:first').should('have.attr', 'placeholder', 'Email').type('user@phptravels.com', {force: true})
    cy.get('input:password').should('have.attr', 'placeholder', 'Password').type('demouser', {force: true})
    //cy.login(user); 
    cy.get('button[type=submit]').contains('Login').click({ force: true });
    });
  

  it('2. Log in as an agent', function(){
    cy.get('.theme-btn').contains('Login').click();
    cy.login(agent);
    cy.get('button[type=submit]').contains('Login').click({ force: true });
    })})

  it('3. Signup without password', function(){
    cy.get('.theme-btn').contains('Signup').click();
    
  })