// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.viewport(1200, 750)
    cy.visit('/')
    cy.title().should('eq', 'Base Vue')
    cy.contains('h1', 'You did it!')
  })
})
