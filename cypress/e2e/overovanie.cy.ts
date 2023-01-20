it('overovanie', () => {

  cy.visit('/board/1')

  cy.get('[data-cy="list-name"]')
    .should('have.value', 'new list')

})