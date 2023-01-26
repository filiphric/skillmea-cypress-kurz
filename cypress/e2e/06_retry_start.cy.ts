it('retry', { defaultCommandTimeout: 10000 }, () => {

  cy.visit('/board/1')

  cy.get('[data-cy=card]')
    .eq(2)
    .should('contain.text', 'juice')

});
