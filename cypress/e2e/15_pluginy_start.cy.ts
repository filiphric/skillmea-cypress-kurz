it('pluginy', () => {

  cy.request('POST', '/api/boards', {
    name: "Hello world"
  })

});