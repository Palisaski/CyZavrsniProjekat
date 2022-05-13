import { login } from './pom/login'

Cypress.Commands.add('login', ({username, password}) => {
  cy.get(login.username).type(username,{force: true})
  cy.get(login.password).type(password,{force: true})
  cy.get(login.loginBtn).click({force: true})
})
