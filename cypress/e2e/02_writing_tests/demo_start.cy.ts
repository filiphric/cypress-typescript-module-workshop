import * as cards from "../../fixtures/cards.json";

it('has correct board name', () => {

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .invoke('te')
    .should('eq', 'my board')


});

it('opens trello app', { tags: '@smoke' }, () => {

  cy.visit('/')

});

it('cards are created with correct order', () => {

  cy.intercept('POST', '/api/cards').as('cardCreate')

  cy.visit('/board/1')
  cy.get('[data-cy="new-card"]').click()

  cards.forEach((card) => {

    cy.get('[data-cy="new-card-input"]')
    // fill in text
    // check number

  });

});

it('board response has correct name and contains id', () => {

  const name = "new board"

  cy.request('POST', '/api/boards', { name })
    .then(({ body }) => {
      expect(body.name).to.eq(name)
      expect(body.id).to.exist
    })

});