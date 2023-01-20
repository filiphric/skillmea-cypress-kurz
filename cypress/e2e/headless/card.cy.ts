beforeEach(() => {
  cy.request('POST', '/api/reset');
  cy.request('POST', '/api/boards', { name: 'board' }).its('body.id').as('boardId')
});

beforeEach(function () {
  cy.request('POST', '/api/lists', { name: 'list', boardId: this.boardId }).its('body.id').as('listId')
});

it('card create', function () {

  cy.intercept('POST', '/api/cards').as('createCard');

  cy.visit(`/board/${this.boardId}`);

  cy.get('[data-cy=new-card]').eq(0).click();
  cy.get('[data-cy=new-card-input]').eq(0).type('card 1{enter}');
  cy.wait('@createCard')
    .its('request.body.name')
    .should('eq', 'card 1');
  cy.get('[data-cy=card]').should('be.visible');

});

it('card complete', function () {

  cy.request('POST', '/api/cards', { name: 'list', boardId: this.boardId, listId: this.listId })

  cy.visit(`/board/${this.boardId}`);
  cy.intercept('PATCH', '/api/cards/*').as('createCard');

  cy.intercept('PATCH', '/api/cards/*').as('patchCard');
  cy.get('[data-cy=card]').should('be.visible')
  cy.get('[data-cy=card-checkbox]').check();
  cy.wait('@patchCard')
    .its('request.body.completed')
    .should('be.true');
  cy.get('[data-cy=card-checkbox]').uncheck();
  cy.wait('@patchCard')
    .its('request.body.completed')
    .should('be.false');

});
