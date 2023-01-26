it('načítanie zoznamu boardov', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/boards'
  })
    .as('boardList')

  cy.visit('/');

})

it('chybová hláška pri vytvorení boardu', () => {

  cy.intercept({
    method: 'POST',
    url: '/api/boards'
  })
    .as('boardCreate')

  cy.visit('/');

  cy.get('[data-cy=create-board]')
    .click()

  cy.get('[data-cy=new-board-input]')
    .type('garden project{enter}')


})

it('pomalé načítavanie', () => {

  cy.intercept({
    method: 'GET',
    url: '/api/boards'
  })
    .as('boards')

  cy.visit('/')

});