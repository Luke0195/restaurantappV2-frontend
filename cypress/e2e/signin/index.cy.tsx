/// <reference types="cypress"/>

beforeEach(() => {
  cy.visit('http://localhost:5173')
})
describe('SignIn Component ', () => {
  it('should form start with default values', () => {
    cy.get('input[name="email"]').should('have.value', '')
    cy.get('input[name="password"]').should('have.value', '')
    cy.get('button').should('not.be.enabled')
  })
})
