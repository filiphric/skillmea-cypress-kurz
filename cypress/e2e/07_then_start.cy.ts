it('text prvej karty', () => {

  cy.visit('/board/1')

  cy.get('[data-cy="card-text"]')
    .eq(0)
    .should('have.text', 'milk')

});

it('text všetkých kariet', () => {

  cy.visit('/board/1')

  cy.get('[data-cy="card-text"]')
    .eq(0)
    .should('have.text', 'milk')

  cy.get('[data-cy="card-text"]')
    .eq(0)
    .should('have.text', 'bread')

  cy.get('[data-cy="card-text"]')
    .eq(0)
    .should('have.text', 'juice')


});