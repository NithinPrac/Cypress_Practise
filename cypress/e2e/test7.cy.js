/// <reference types="cypress" />
describe('Calendar test', () => {
    it('varify date selected', () => {

        const date = "10";
        const month = "4";
        const year = "2023";

cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');
cy.get('.react-date-picker__inputGroup__year').click();
cy.get('.react-calendar__navigation__label').click();
cy.get('.react-calendar__navigation__label').click();
cy.contains("button",year).click()
cy.get('button[class*="react-calendar__year-view__months__month"] abbr').eq(Number(month)-1).click()
cy.contains('abbr',date).click()
    })
})