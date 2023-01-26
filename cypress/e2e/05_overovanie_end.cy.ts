it('overovanie', () => {

  cy.visit('/board/1')

  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy=new-card-input]')
    .type('new card{enter}')

  // overenie viditeľnosti
  cy.get('[data-cy=card]')
    .should('be.visible')

  // overenie počtu kariet
  cy.get('[data-cy=card]')
    .should('have.length', 2)

  // overenie zaškrtnutia
  cy.get('[data-cy=card-checkbox]')
    .eq(0)
    .should('be.checked')

  // overenie classy
  cy.get('[data-cy=due-date]')
    .should('have.class', 'completed')

  // overenie hodnoty v input elemente
  cy.get('[data-cy=list-name]')
    .should('have.value', 'new list')

})