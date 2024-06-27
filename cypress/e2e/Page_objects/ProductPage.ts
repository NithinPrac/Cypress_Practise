export class ProductPage{
    addProduct(productname:string){
        cy.get('.card-title a').each(($el, index, $list) => {
            if ($el.text() === productname) {
              cy.get('.btn.btn-info').eq(index).click();
            }
          });
    }
    checkout(){
        cy.contains('Checkout').click({force: true});
    }
    comparePrice(){
        let sum = 0;
        
        cy.get('tr td:nth-child(4) strong').each((el,index)=>{
            const text = el.text();
            let val = text.split(' ')[1].trim();
            sum = Number(sum)+ Number(val);
        })

        cy.get('h3 strong').then((ele)=>{
            let total = Number( ele.text().split(" ")[1]);
            expect(sum).to.equal(total)
        })

    }
    
    
       
    
}