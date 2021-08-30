describe("Step1", () => {

    it("Enter valid location", () => {
        cy.visit("/");
     
        cy.get('input[name="location"]')
        .type("Melbourne")
        .should("have.value", "Melbourne");
        
    });

    it("Click button & expect spinner", () => {
        cy.get('button')
            .click();

        cy.get('.spinner-border')
            .should("exist"); 
    });

    it("Expect search result", () => {
        cy.get('.searchResult')
            .should("exist"); 
    });

    it("Expect forecast result", () => {
        cy.get('.forecastTile')
            .should("exist"); 
    });
});