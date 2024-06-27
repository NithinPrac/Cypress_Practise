
class Homepage{
    visit(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
    }
    SetName(name : string) {
        cy.get("input[name='name']:nth-child(2)").type(name);
    }
    SetEmail(email :string){
        cy.get('input[name="email"]').type(email);
    }
    SetPassword(password:string){
        cy.get('#exampleInputPassword1').type(password);
    }
    SetGender(gender:string){
        cy.get('#exampleFormControlSelect1').select(gender);
    }
    SetDOB(date :string){
        cy.get('[name="bday"]').type(date);
    }
    clickSubmit(){
        cy.get('[value="Submit"]').click();
    }
    clickShop(){
        cy.contains('Shop').click({force: true});
    }
}

export default Homepage;