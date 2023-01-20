it('retry', { defaultCommandTimeout: 10000 }, () => {

  // akcia
  cy.visit('/board/1')

  // queries
  cy.get('[data-cy=card]')
    .eq(2)
    .should('contain.text', 'milk') // overovania

  cy.get('[data-cy=due-date]')
    .eq(2)
    .should('have.text', 'Jan 06 2023')

});
