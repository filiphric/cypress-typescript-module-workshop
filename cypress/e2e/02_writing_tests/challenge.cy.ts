// challenge #1: in the following example, find a function in .invoke() that will change the text "hello" to upper case
it('tests a word in upper case', () => {

  cy.wrap('hello')
    .invoke()
    .should('eq', 'HELLO')

});

// challenge #2: we are using a cypress-real-events plugin here, but haven’t added its type definitions to tsconfig. take a look into cypress-real-events plugin docs (link is in notes) fix the error that’s on .realHover() command
it('changes color on hover', () => {

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .realHover()
    .should('have.css', 'background-color', 'rgb(5, 90, 140)')

});

// challenge #3: go to tsconfig.json and add path alias for fixtures folder, the same way we did in the demo

// challenge #4: use fixture for data driven test
it('cards are created with correct order', () => {

  cy.intercept('POST', '/api/cards').as('cardCreate')

  cy.visit('/board/1')
  cy.get('[data-cy="new-card"]').click()

  // import json
  // loop over array
  // fill in text
  // check number

});

// challnege #5: cast Card type into request
it('board response has correct name and contains id', () => {

  const name = "new card"

  cy.request('POST', '/api/cards', { name, boardId: 1, listId: 1 })
    .then(({ body }) => {

      // try out the autocomplete here

    })

});