/// <reference types="cypress" />
describe('Alerts',()=>{
    it("Handling alerts",()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Handling Alerts
        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();
        cy.on('window:alert',(str) => {
            expect(str).to.equals('Hello , share this practice page and share your knowledge')
        })
    })
})




