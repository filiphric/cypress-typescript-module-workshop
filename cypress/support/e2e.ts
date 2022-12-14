import '../../workshop-scripts/testSetupHook.ts'
import '../../workshop-scripts/infoCommand.ts'
import "cypress-real-events/support";
import '@commands/getByData'

Cypress.Commands.overwrite('request', (orig, ...args) => {

  if (typeof args[0] === 'object') {
    args[0].headers = {
      accept: 'application/json',
      ...args[0].headers
    }
  }
  return orig(...args)
})