it('premennĂ©', () => {

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .invoke('text')

})