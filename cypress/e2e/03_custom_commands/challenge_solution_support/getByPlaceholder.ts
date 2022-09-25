import { Placeholders } from './placeholders';

declare global {
  namespace Cypress {
    interface Chainable {
      getByPlaceholder(
        input: Placeholders
      ): Chainable<any>
    }
  }
}

/**
 * Gets element using placeholder
 * @param input placeholder attribute value
 * @example
 * // this command
 * cy.getByPlaceholder('Your email')
 * // will select this element
 * <input placeholder="Your email">
 *
 */
Cypress.Commands.add('getByPlaceholder', (
  input
) => {

  Cypress.log({
    consoleProps() {
      return {
        selector: input,
      };
    },
    displayName: 'getByData',
    name: 'Get by [data-cy] attribute',
  });

  return cy.get(`[placeholder='${input}']`);

});