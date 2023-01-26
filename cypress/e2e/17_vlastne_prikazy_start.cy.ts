

beforeEach(() => {

  cy.request('POST', '/api/reset')
  cy.request('POST', '/api/boards', { name: 'nákup' })
    .its('body.id')
    .as('boardId')

})

it('vlastne prikazy', function () {

  cy.visit(`/board/${this.boardId}`)

  cy.get('[data-cy="add-list-input"]')
    .type('Potraviny{enter}')

  cy.get('[data-cy="new-card"]')
    .click()

  cy.get('[data-cy="new-card-input"]')
    .type('mlieko{enter}')

});