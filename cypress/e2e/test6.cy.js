/// <reference types="cypress" />


import 'cypress-iframe';


describe('Frames Test', () => {
    it('Testing frames', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.frameLoaded('#courses-iframe')

        //switch to iframe
        cy.iframe().find('a[href*="mentorship"]').eq(0).click();
        cy.wait(2000);
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2);
    })
})