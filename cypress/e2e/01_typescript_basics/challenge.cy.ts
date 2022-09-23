
// challenge #1: convert this file from .js to .ts and see how many errors it will reveal

// challenge #2: fix the typescript error on .type() command in this test
it('adds all prime numbers in list name', () => {

  cy.visit('/board/1')

  cy.get('[data-cy="list-name"]')
    .type(2357)

});

// challenge #3: the request in this test works, but throws errors in typescript. based on the error messge, try to figure out how to fix the error
it('requests a board list', () => {

  cy.request({
    method: 'GET',
    url: '/api/boards',
    body: false
  })
    .its('status')
    .should('eq', 200)

});

// challenge #4: we are looping through an array to create cards. fix the issue with the the array so that we get rid of ts errors
it('adds couple of cards', () => {

  cy.visit('/board/1')
  cy.get('[data-cy="new-card"]').click()

  const primeNumbers = [
    2, 3, 5, 7
  ]

  primeNumbers.forEach(card => {

    cy.get('[data-cy="new-card-input"]')
      .type(card).type('{enter}')

  });

});

// challenge #4: .eq(0) command is working well, but it’s not lloking good in TypeScript. figure out the error and fix it
it('should have a list', () => {

  cy.visit('/board/1')
  cy.get('[data-cy="list"]')
    .eq('0')
    .should('be.visible')

});

// challenge #5: fix the type error in the assertion 
it('has proper number of boards', () => {

  cy.intercept('GET', '/api/boards').as('boards')

  cy.visit('/')

  cy.wait('@boards')
    .its('response')
    .then(({ body }) => {
      expect(body).to.have.length("1")
    })

});