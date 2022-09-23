import Board from "trelloapp/src/typings/board";
import * as cards from '@fixtures/cards.json';

it('has correct board name', () => {

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .invoke('text')
    .should('eq', 'my board')


});

it('opens trello app', { tags: '@smoke' }, () => {

  cy.visit('/')

});

it('Cards are created with correct order', () => {

  cy.intercept('POST', '/api/cards').as('cardCreate')

  cy.visit('/board/1')
  cy.get('[data-cy="new-card"]').click()

  cards.forEach((card) => {

    cy.get('[data-cy="new-card-input"]')
      .type(card.name).type('{enter}')

    cy.wait('@cardCreate')
      .its('response.body.order')
      .should('eq', card.order)

  });

});

it('Using types from source', () => {

  const name = "new board"

  cy.request<Board>('POST', '/api/boards', { name })
    .then(({ body }) => {
      expect(body.name).to.eq(name)
      expect(body.id).to.exist
    })

});