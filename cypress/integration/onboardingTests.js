describe('First Test Suite', function() {
    beforeEach('Go to application', function(){
      cy.visit('/')
  });
  
  it('Log in test', function(){
    cy.get(".theme-btn").contains("Login").click();
    }
    //cy.loginUser('user@phptravels.com', 'demouser')
  
  
  )})
