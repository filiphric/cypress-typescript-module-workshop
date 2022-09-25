
it('Testing a brand new feature', () => {

  cy.visit('/')

  // @ts-ignore selector will be added by @filip in next release
  cy.getByData('new-selector')


});