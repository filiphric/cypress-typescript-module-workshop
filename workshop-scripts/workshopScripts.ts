import { testSetupData } from './testSetupData';

export const registerWorkshopScripts = (on: Cypress.PluginEvents) => {
  on('task', { testSetupData })
};