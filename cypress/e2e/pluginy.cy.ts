it('pluginy', () => {

  cy.request('POST', '/api/boards', {
    name: "Hello world"
  })

  cy.request('PATCH', '/api/boards/1', {
    starred: true
  })

  cy.request('DELETE', '/api/boards/1')

});