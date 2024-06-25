/// <reference types="cypress" />
describe('Handling Table', () => {
    it('Should handle child window', () => {
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('tr td:nth-child(2)').each(($el,index,$list) =>{
            const text = $el.text();
            if(text === 'Master Selenium Automation in simple Python Language'){
                cy.get('tr td:nth-child(2)').eq(index).next().then((price)=>{
                    expect(price.text()).to.equal('25');
                })
            }
        })
    })
})