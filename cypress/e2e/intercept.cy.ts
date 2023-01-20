it('vytvorenie novej karty', () => {

  cy.intercept('POST', '/api/cards')
    .as('novaKarta')

  cy.visit('/board/1')

  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('chlieb{enter}')

  cy.wait('@novaKarta')
    .its('response.statusCode')
    .should('eq', 201)

});

it('odstránenie karty', () => {

  cy.intercept('DELETE', '/api/cards/*')
    .as('vymazanieKarty')

  cy.visit('/board/1')

  cy.get('[data-cy="card"]')
    .last()
    .click()

  cy.get('[data-cy="card-detail-delete"]')
    .click()

  cy.wait('@vymazanieKarty')

});

it.only('v boarde nie sú žiadne zoznamy', () => {

  cy.intercept('GET', /lists/)
    .as('zoznamy')

  cy.visit('/board/1')

  cy.wait('@zoznamy')

  cy.get('[data-cy=list]')
    .should('not.exist')

});

