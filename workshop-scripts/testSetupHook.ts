import * as path from 'path';
import * as singleBoardsingleList from './fixtures/singleBoardsingleList.json'
import * as singleBoardsingleList2 from './fixtures/singleBoardsingleList2.json'
import * as singleBoardTwoListsTwoCards from './fixtures/singleBoardTwoListsTwoCards.json'

const beforeTestSeeds = {

}

const beforeEachTestSeeds = {
  'cypress/e2e/01_typescript_basics/challenge.cy.ts': singleBoardsingleList,
  'cypress/e2e/01_typescript_basics/challenge.cy.js': singleBoardsingleList,
  'cypress/e2e/01_typescript_basics/challenge_solution.cy.js': singleBoardsingleList,
  'cypress/e2e/01_typescript_basics/challenge_solution.cy.ts': singleBoardsingleList,
  'cypress/e2e/02_writing_tests/demo_end.cy.ts': singleBoardsingleList2,
  'cypress/e2e/02_writing_tests/challenge.cy.ts': singleBoardsingleList2,
  'cypress/e2e/02_writing_tests/challenge_solution.cy.ts': singleBoardsingleList2,
}

const testPath = path.normalize(Cypress.spec.relative)

before(() => {

  const dbState = beforeTestSeeds[`${testPath}`]

  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before all tests', dbState)
  }

})

beforeEach(() => {

  const dbState = beforeEachTestSeeds[`${testPath}`]

  if (dbState) {
    cy.task('testSetupData', dbState, { log: false })
    cy.info('💡 Database was wiped and seeded before each test', dbState)
  }

})