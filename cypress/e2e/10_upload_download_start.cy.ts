it('upload a download', () => {

  cy.visit('/board/1?card=1')

  cy.get('[data-cy="upload-image"]')

})