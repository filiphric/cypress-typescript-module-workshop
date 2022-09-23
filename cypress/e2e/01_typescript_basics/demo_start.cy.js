/// <reference types="cypress" />

it('testing in javascript', () => {

  cy.visit()

  cy.get('[data-cy="first-board"]')
    .type(1234)

})