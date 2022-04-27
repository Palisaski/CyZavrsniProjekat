import { login } from './pom/login'

Cypress.Commands.add('login', ({username, password}) => {
  cy.get(login.email).type(username, {force : true})
  cy.get(login.password).type(password, {force : true})

})