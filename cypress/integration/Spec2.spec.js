describe("Step1", () => {

    it("Enter invalid location", () => {
        cy.visit("/");
     
        cy.get('input[name="location"]')
        .type("uga booga location")
        .should("have.value", "uga booga location");
        
    });

    it("Click button & expect spinner", () => {
        cy.get('button')
            .click();

        cy.get('.spinner-border')
            .should("not.exist"); 
    });

    it("Expect search result", () => {
        cy.get('.searchResult')
            .should("not.exist"); 
    });

    it("Expect forecast result", () => {
        cy.get('.forecastTile')
            .should("not.exist"); 
    });
});