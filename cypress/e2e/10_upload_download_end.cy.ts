it('upload a download', () => {

  cy.visit('/board/1?card=1')

  // cy.get('[data-cy="upload-image"]')
  //   .selectFile('cypress/fixtures/skillmea_logo.svg', { action: 'drag-drop' })

  cy.contains('Download')
    .click()

  cy.readFile('cypress/downloads/skillmea_logo.svg')

})