import { CheckoutPage } from "./Page_objects/CheckoutPage";
import Homepage from "./Page_objects/HomePage";
import { ProductPage } from "./Page_objects/ProductPage";
/// <reference types="cypress" />

describe('Test',()=>{
it("first test",()=>{
const home = new Homepage();
const product = new ProductPage();
const checkoutPage = new CheckoutPage();
home.visit();
home.SetName('Nithin');
home.SetEmail('test@gmail.com');
home.SetGender('Female')
home.SetPassword('password123')
home.clickShop();
cy.wait(1000);
product.addProduct('Blackberry')
product.addProduct('iphone X')
product.checkout();
product.comparePrice();
product.checkout()
checkoutPage.country('India');
checkoutPage.clickCheckBox();
checkoutPage.clickPurchase();
cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks ')
})
})