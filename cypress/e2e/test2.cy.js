/// <reference types="cypress" />
describe('Automation Testing',()=>{
    it("Test",()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Handling Alerts

        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();
        cy.on('window:alert',(str) => {
            expect(str).to.equals('Hello , share this practice page and share your knowledge')
        })
    })
})




