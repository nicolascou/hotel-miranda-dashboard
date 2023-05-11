describe('Routing', () => {
  it('should redirect to login', () => {
    cy.visit('http://localhost:3000/hotel-miranda-dashboard');
    cy.get('.login').should('exist');
  });
});

describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/hotel-miranda-dashboard/login');
  });
  it('should go to dashboard, valid credentials', () => {
    cy.get('[data-cy="user-test"]').type('nico');
    cy.get('[data-cy="password-test"]').type('1234');
    cy.get('[data-cy="login-test"]').click();
    cy.get('.dashboard').should('exist');
  });
  it('should stay in /login, invalid credentials', () => {
    cy.get('[data-cy="user-test"]').type('invaliduser');
    cy.get('[data-cy="password-test"]').type('00000');
    cy.get('[data-cy="login-test"]').click();
    cy.get('.login').should('exist');
  });
});