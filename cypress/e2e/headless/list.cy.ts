beforeEach(() => {
  cy.request('POST', '/api/reset');
  cy.request('POST', '/api/boards', { name: 'board' }).its('body.id').as('boardId')
});

it('create a list', function () {

  cy.visit(`/board/${this.boardId}`);

  cy.get('[data-cy=add-list-input]').type(`list{enter}`);
  cy.contains('Add list').click();
  cy.get('[data-cy=list]').should('have.length', 1);

});

it('rename list', function () {

  cy.request('POST', '/api/lists', { name: 'list', boardId: this.boardId })

  cy.visit(`/board/${this.boardId}`);

  cy.get('[data-cy=list-name]').type('renamed list{enter}');
  cy.get('[data-cy=list-name]').should('have.value', 'new list');


});