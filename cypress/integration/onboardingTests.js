import { loginBtn } from '../support/pom/login'
import { login } from '../support/pom/login'

const user = Cypress.env('user')
const agent = Cypress.env('agent')

describe('Onboarding Test Suite', function() {
    beforeEach('Go to application', function(){
      cy.visit('/')
  })
  
  it('1. Log in as a user', function(){
    cy.get('.theme-btn').contains('Login').click()
    cy.login(user)
    })
  
  it('2. Log in as an agent', function(){
    cy.get('.theme-btn').contains('Login').click()
    cy.login(agent)
    })

  it('3. Sign up', function(){
    cy.get('.theme-btn').contains('Signup').click()
    cy.get('input[name=first_name]').type('Jovana',{force: true})
    cy.get('input[name=last_name]').type('Matic',{force: true})
    cy.get('input[name=phone').type('200122',{force: true})
    cy.get('input[name=email').type('0772@gmail.com',{force: true})
    cy.get('input[name=password').type('dsa02a',{force: true})
    cy.get('button[type=submit]').contains('Signup').click({force: true})
    cy.get('.modal-title').should('have.text', 'LoginReset Password')   
    })

  it('4. Navigate back to Login page from Signup page', function(){
    cy.get('.theme-btn').contains('Signup').click()
    cy.get('.ladda-label').contains('Login').click({force: true})
    })

  it('5. Open reset password',function(){
    cy.get('.theme-btn').contains('Login').click()
    cy.get(login.username).type('Blabla',{force: true})
    cy.get(login.password).type('000000',{force: true})
    cy.get('.custom-checkbox').contains('Reset Password').click( {force: true})
    })
})