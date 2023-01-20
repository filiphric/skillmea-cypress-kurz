it('creates a board', () => {

  cy.request('POST', '/api/reset');
  cy.intercept({
    method: 'POST',
    url: '/api/boards'
  }).as('createBoard');
  cy.visit('/');

  cy.get('[data-cy=first-board]').type('new board{enter}');
  cy.wait('@createBoard').then(({ response }) => {
    cy.location('pathname')
      .should('eq', `/board/${response!.body.id}`);
  });
  cy.get('[data-cy=board-detail]').should('be.visible');

});