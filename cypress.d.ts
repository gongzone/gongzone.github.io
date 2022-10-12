declare global {
  namespace Cypress {
    interface Chainable {
      dataCy(value: string): Chainable<Element>;
    }
  }
}
