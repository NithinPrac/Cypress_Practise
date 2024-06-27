
export class CheckoutPage{
    country(country : string){
        cy.get('#country').type(country);
        cy.wait(8000);
        cy.get('.suggestions > ul > li > a').click();
    }
    clickCheckBox(){
        cy.get('.checkbox').click({force:true});
    }
    clickPurchase(){
        cy.get('.ng-untouched > .btn').click();
    }
}