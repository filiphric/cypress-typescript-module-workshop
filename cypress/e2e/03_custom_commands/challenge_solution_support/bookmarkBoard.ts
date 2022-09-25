import Board from "trelloapp/src/typings/board";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Bookmarks a board a board via API
       * @param body 
       * @example
       * cy.bookmarkBoard({ id: 1, starred: true })
       *
       */
      bookmarkBoard(
        body: Pick<Board, 'id' | 'starred'>
      ): Chainable<any>
    }
  }
}

Cypress.Commands.add('bookmarkBoard', (
  body
) => {

  Cypress.log({
    displayName: 'bookmarkBoard',
    name: 'Bookmark a board via API',
  });

  return cy.request({
    method: 'PATCH',
    url: `/api/boards/${body.id}`,
    body
  })

});