it('overovanie', () => {

  cy.visit('/board/1')

  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy=new-card-input]')
    .type('new card{enter}')

})