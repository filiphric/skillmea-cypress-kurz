beforeEach(() => {

  cy.request('POST', '/api/reset')

});

it('requesty', () => {

  cy.request('POST', '/api/boards', { name: 'board vytvorený cez api' })
    .then(board => {
      expect(board.status).to.eq(201)
    })

  cy.request({
    method: 'GET',
    url: '/api/boards',
    headers: {
      accept: 'application/json'
    }
  }).its('body')
    .should('have.length', 1)

});