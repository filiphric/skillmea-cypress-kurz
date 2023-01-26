it('class, id, attr', { baseUrl: null }, () => {

  cy.visit('./mini-apps/shapes.html')

  // označenie pomocou classy
  cy.get('.square')
  // označenie pomocou idčka
  cy.get('#circle')
  // označenie pomocou atribútu
  cy.get('[data-cy=triangle')

  // označenie pomocou textu
  cy.contains('Shapes')

  // označenie elementu h1, ktorý obsahuje text
  cy.contains('h1', 'Shapes')

})

it('hľadanie elementov', { baseUrl: null }, () => {

  cy.visit('./mini-apps/rainbow.html')

  // označenie prvého elementu
  cy.get('li')
    .first()

  // označenie elementu podľa poradia
  cy.get('li')
    .eq(2)

  // označenie child elementu pomocou príkazu find
  cy.get('ul')
    .find('.green')

  // ďalšie queries nájdeš v dokumentácii:
  // https://docs.cypress.io/api/commands/as

})