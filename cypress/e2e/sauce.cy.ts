/// <reference types="cypress" />
describe('Sauce demo login', () => {

    before(function() {
        cy.fixture('saucedata').as('data');
      });

    it('Login', function() {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type(this.data.username)
        cy.get('[data-test="password"]').type(this.data.password)
        cy.get('[data-test="login-button"]').click()
        //validate page landed on inventory page
        cy.url().should('include','/inventory')
    })

})