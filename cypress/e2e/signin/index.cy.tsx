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

  it('Should navigate to home page when valid data is provided', () => {
    cy.get('input[name="email"').type('any@mail.com')
    cy.get('input[name="password"').type('123')
    cy.get('button').should('be.enabled')
    cy.visit('/home')
  })
})
