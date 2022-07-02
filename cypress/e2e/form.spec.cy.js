describe("wizard", () => {
  it("should load form", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Sign Up");
  });
});
