it.only('vytvorenie novej karty', () => {

  cy.visit('/board/1')

  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('chlieb{enter}')

});

it('odstránenie karty', () => {

  cy.visit('/board/1')

  cy.get('[data-cy="card"]')
    .last()
    .click()

  cy.get('[data-cy="card-detail-delete"]')
    .click()

});

it('v boarde nie sú žiadne zoznamy', () => {

  cy.visit('/board/1')

  cy.get('[data-cy=list]')
    .should('not.exist')

});

