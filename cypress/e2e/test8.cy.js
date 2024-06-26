

/// <reference types="cypress" />
describe('Hooks', () => {
    before(function() {
      cy.fixture('example').as('userdata');
    });
  
    it('Using fixtures', function() {
      cy.visit("https://rahulshettyacademy.com/angularpractice/");
      cy.get(':nth-child(1) > .form-control').type(this.userdata.name);
    });
  });