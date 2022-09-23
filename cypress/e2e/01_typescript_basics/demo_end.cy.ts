it('testing in typescript', () => {

  cy.visit('/')

  cy.get('[data-cy="first-board"]')
    .type('1234')

})