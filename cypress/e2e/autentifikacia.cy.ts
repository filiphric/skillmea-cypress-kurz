beforeEach(() => {

  cy.session('login', () => {

    cy.visit('/login')

    cy.get('[data-cy="login-email"]')
      .type('filip@example.com')

    cy.get('[data-cy="login-password"]')
      .type('nbusr123{enter}')

    cy.location('pathname')
      .should('eq', '/')

  })



});

// beforeEach(() => {

//   cy.request({
//     method: 'POST',
//     url: '/api/login',
//     body: {
//       email: 'filip@example.com',
//       password: 'nbusr123'
//     }
//   }).then((res) => {

//     cy.setCookie('auth_token', res.body.accessToken)

//   })

// });

it('prihlasenie', () => {

  cy.visit('/')

  cy.get('[data-cy=board-item]')
    .should('have.length', 2)

});