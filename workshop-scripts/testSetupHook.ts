import * as path from 'path';
import * as singleBoardsingleList from './fixtures/singleBoardsingleList.json'
import * as singleBoardsingleList2 from './fixtures/singleBoardsingleList2.json'

const beforeEachTestSeeds = {
  'cypress/e2e/01_typescript_basics/challenge.cy.ts': singleBoardsingleList,
  'cypress/e2e/01_typescript_basics/challenge.cy.js': singleBoardsingleList,
  'cypress/e2e/01_typescript_basics/challenge_solution.cy.js': singleBoardsingleList,
  'cypress/e2e/01_typescript_basics/challenge_solution.cy.ts': singleBoardsingleList,
  'cypress/e2e/02_writing_tests/demo_end.cy.ts': singleBoardsingleList2,
  'cypress/e2e/02_writing_tests/challenge.cy.ts': singleBoardsingleList2,
  'cypress/e2e/02_writing_tests/challenge_solution.cy.ts': singleBoardsingleList2,
  'cypress/e2e/03_custom_commands/demo_start.cy.ts': singleBoardsingleList,
  'cypress/e2e/03_custom_commands/demo_end.cy.ts': singleBoardsingleList
}

const testPath = path.normalize(Cypress.spec.relative)

beforeEach(() => {

  const dbState = beforeEachTestSeeds[`${testPath}`]

  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before each test', dbState)
  }

})