/// <reference types="cypress" />
describe('Custom commands', () => {
    it('test', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.contains('Shop').click()
        cy.selectProduct('Blueberry')
    })
})