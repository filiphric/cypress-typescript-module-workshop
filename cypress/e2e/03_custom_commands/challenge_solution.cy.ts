import './challenge_solution_support/bookmarkBoard'
import './challenge_solution_support/getByPlaceholder'

// challenge #1: create an API command that will bookmark a board. Use "Pick" utility type
it('bookmarks a board', () => {

  cy.bookmarkBoard({ id: 1, starred: true })
  // since we are bookmarking a board via API, we need to bookmark it first and then open the app to see it
  cy.visit('/')

});


// challenge #2: create a custom command that will select element by placeholder text
// extra credits challenge: create a "placeholders.d.ts" file with some of the placeholders within thhe app
it('creates a new board', () => {

  cy.visit('/')
  cy.getByData('create-board').click()
  cy.getByPlaceholder('Add board title')

});