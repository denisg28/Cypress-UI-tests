///<reference types="cypress" />

// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://google.com')
//   })
// })
describe("Test", function() {
  it("Click Querying from Commands drop-down + href validation", function() {
    cy.visit("https://example.cypress.io/");
    cy.get("nav").contains("Commands").click();
    cy.get("nav").contains("Querying").click();
    cy.get("a").contains("Best Practices: Selecting elements").should("have.attr", "href", "https://on.cypress.io/best-practices#Selecting-Elements");

    //TODO - Create API Request and validate 200 Response + Input Name(firstId from JSON)
    cy.request("https://jsonplaceholder.typicode.com/users").then(response => { 
      expect(response.status).to.eq(200);
      const First_id = response.body[0].name;
      cy.get("input[placeholder='Name']").type(First_id); //Input first name
      expect(response.body.length).to.eq(10); 
      const last = response.body.length-1;  //Additional, out Of task :)
      const Last_id = response.body[last].name;
      cy.get('[placeholder="Name"]').clear();
      cy.get("input[placeholder='Name']").type(Last_id); //Input last name
    });
    cy.request("https://jsonplaceholder.typicode.com/users").then(response => { 
      expect(response.status).to.eq(200);
      expect(response.body.length).to.eq(5);  //bug id=10;
    });
    // -- //
  });
});