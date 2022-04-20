describe('First Test Suite', function() {
    beforeEach('Go to application', function(){
      cy.visit('/')
  });
  
  it('Log in as a user', function(){
    cy.get(".theme-btn").contains("Login").click();
    cy.get("input[placeholder='Email']").click({ force: true }).type('user@phptravels.com');
    cy.get("input[placeholder='Password']").click({ force: true }).type('demouser');
    cy.get("button[type=submit]").contains("Login").click({ force: true });
    
    }
    
  )})
