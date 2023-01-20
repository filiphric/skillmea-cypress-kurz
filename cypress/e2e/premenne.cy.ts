beforeEach(() => {

  // arrange
  cy.visit('/board/1')

  cy.get('[data-cy=card-text]')
    .eq(0)
    .invoke('text')
    .as('cardName')

})

it('premenné', function () {

  // act
  cy.get('[data-cy=card]')
    .click()

  // assert
  cy.get('[data-cy="card-detail-title"]')
    .should('have.value', this.cardName)

})