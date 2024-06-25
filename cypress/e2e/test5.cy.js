/// <reference types="cypress" />
describe('Mouse Hover popups', () => {
    it('Mouse hover values', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        
        //to make hidden elements visible using JQuery 
        //cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click({force: true})
        cy.url().should('include','top')


    })
})