import * as path from 'path';
const singleBoardsingleList = require('./fixtures/singleBoardsingleList.json')


const beforeTestSeeds = {

}

const beforeEachTestSeeds = {
  'cypress/e2e/01_typescript_basics/challenge.cy.ts': singleBoardsingleList,
  'cypress/e2e/01_typescript_basics/challenge.cy.js': singleBoardsingleList,
  'cypress/e2e/01_typescript_basics/challenge_solution.cy.js': singleBoardsingleList,
  'cypress/e2e/01_typescript_basics/challenge_solution.cy.ts': singleBoardsingleList
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