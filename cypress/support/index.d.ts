declare namespace Cypress {
  interface Chainable {
    /**
     * Príkaz na označenie DOM elementu pomocou
     * data-cy atribútu
     * @param selector 
     */
    dataCy(selector)
  }
}