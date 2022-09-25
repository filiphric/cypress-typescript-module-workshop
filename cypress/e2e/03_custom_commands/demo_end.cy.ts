beforeEach(() => {

  cy.addBoard({ name: 'hello' }).its('body.id').as('boardId')

});

it('creates a board via API', () => {

  cy.visit(`/board/${this.boardId}`)

});

it('get element by data selector', () => {

  cy.visit('/')

  cy.getByData('board-item')
    .click()

});