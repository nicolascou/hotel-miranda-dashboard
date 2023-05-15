describe('Routing', () => {
  it('should redirect to login', () => {
    cy.visit('http://localhost:3000/hotel-miranda-dashboard');
    cy.get('[data-cy="user-test"]').should('exist');
  });
  it('it should not allow to access rooms', () => {
    cy.visit('http://localhost:3000/hotel-miranda-dashboard/rooms');
    cy.get('[data-cy="user-test"]').should('exist');
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
    cy.get('[data-cy="dashboard-test"]').should('exist');
  });
  it('should stay in /login, invalid credentials', () => {
    cy.get('[data-cy="user-test"]').type('invaliduser');
    cy.get('[data-cy="password-test"]').type('00000');
    cy.get('[data-cy="login-test"]').click();
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Invalid Credentials');
    });
  });
});