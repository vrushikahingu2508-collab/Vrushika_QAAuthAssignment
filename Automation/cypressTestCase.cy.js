describe('Authentication Tests', () => {
  const baseURL = 'http://localhost:3000';

  it('Successful registration', () => {
    cy.visit(`${baseURL}/register`);
    cy.get('#name').type('Juli Sharma');
    cy.get('#email').type('juli.sharma@gmail.com');
    cy.get('#password').type('Juli@12345678');
    cy.get('#confirmPassword').type('Juli@12345678');
    cy.get('#register').click();

    cy.contains('Success').should('be.visible');
  });

  it('Registration with duplicate email', () => {
    cy.visit(`${baseURL}/register`);
    cy.get('#name').type('Juli Sharma');
    cy.get('#email').type('juli.sharma@gmail.com');
    cy.get('#password').type('Juli@12345678');
    cy.get('#confirmPassword').type('Juli@12345678');
    cy.get('#register').click();

    cy.contains('already exists').should('be.visible');
  });

  it('Successful login', () => {
    cy.visit(`${baseURL}/login`);
    cy.get('#email').type('juli.sharma@gmail.com');
    cy.get('#password').type('Juli@12345678');
    cy.get('#login').click();

    cy.url().should('include', '/dashboard');
  });

  it('Login with invalid password', () => {
    cy.visit(`${baseURL}/login`);
    cy.get('#email').type('juli.sharma@gmail.com');
    cy.get('#password').type('Test@12723933445');
    cy.get('#login').click();

    cy.contains('Invalid credentials').should('be.visible');
  });

  it('Access dashboard without login', () => {
    cy.visit(`${baseURL}/dashboard`);
    cy.url().should('include', '/login');
  });
});
