import grid from "./pageObject/grid.page"

describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('https://demoqa.com/selectable')
  })
 
  it(`Task ONE`, ()=>{
    cy.get("#demo-tab-grid").click();
    cy.get(".list-group-item").contains("Two").click();
    cy.get(".list-group-item").contains("Four").click();
    cy.get(".list-group-item").contains("Six").click();
    cy.get(".list-group-item").contains("Eight").click();
    //Validate
    grid.row1.get('.list-group-item.active').should('contain','Two');
    grid.row2.get('.list-group-item.active').should('contain','Four');
    grid.row2.get('.list-group-item.active').should('contain','Six');
    grid.row3.get('.list-group-item.active').should('contain','Eight');
    //Validate not selected
    grid.row1.get('.list-group-item:not(.active)').should('contain', 'One');
    grid.row1.get('.list-group-item:not(.active)').should('contain', 'Three');
    grid.row2.get('.list-group-item:not(.active)').should('contain', 'Five');
    grid.row3.get('.list-group-item:not(.active)').should('contain', 'Seven');
    grid.row3.get('.list-group-item:not(.active)').should('contain', 'Nine');
  })



 
  
})

Cypress.on("uncaught:exception", (err, runnable) => {
return false;
});

