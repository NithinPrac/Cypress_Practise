/// <reference types="cypress" />

describe('Testing',()=>{
    it("Weppage",()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      
        //handling checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        cy.get('#checkBoxOption1').uncheck();

        //handling multiple checkboxes 
        cy.get('input[type="checkbox"]').check(['option2','option3'])

        //handling static dropdowns
        cy.get('select').select('option2').should('have.value','option2');

        //Handling dynamic dropdowns
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el,index,$list) =>{
            if($el.text()==='India'){
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value','India');

        //Checking visibility of element
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible')

        //Handling Radio button
        cy.get('[value="radio3"]').check().should('be.checked')

        
        
    })
})


