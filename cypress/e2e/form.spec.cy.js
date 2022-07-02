import formFields from '../selectors/formFields';
import formData from '../fixtures/formData.json';

const fillField = (fieldName, value) => {
  cy.get(fieldName)
    .type(value);
}

const fillFields = (fields) => {
  for (const key in fields) {
    cy.get(key)
      .click()
      .type(fields[key]);
  }
}

const prevPage = () => {
  cy.get(formFields.prevButton)
    .click();
};

const nextPage = () => {
  cy.get(formFields.nextButton)
    .click();
};

const submitForm = () => {
  cy.get(formFields.nextButton)
    .click();
};

describe("wizard", () => {
  before(() => {
    it("should load form", () => {
      cy.visit("http://localhost:3000");
    });
  });
  describe("form", () => {
    it("enters and retains sign up information", () => {
      cy.visit("http://localhost:3000");
      cy.contains("Sign Up");
      fillFields({
        [formFields.email]: formData.email,
        [formFields.password]: formData.password,
        [formFields.confirmPassword]: formData.confirmPassword
      });
      cy.get(formFields.prevButton)
        .should('be.disabled');
      nextPage();
      prevPage();
      cy.get(formFields.email)
        .should('have.value', formData.email)
      cy.get(formFields.password)
        .should('have.value', formData.password)
      cy.get(formFields.confirmPassword)
        .should('have.value', formData.confirmPassword)
      });

      it("enters and retains personal information", () => {
        cy.visit("http://localhost:3000");
        nextPage();
        cy.contains("Personal Info");
        fillFields({
          [formFields.firstName]: formData.firstName,
          [formFields.lastName]: formData.lastName,
          [formFields.username]: formData.username
        });
        prevPage();
        cy.contains('Sign Up');
        nextPage();
        cy.get(formFields.firstName)
          .should('have.value', formData.firstName)
        cy.get(formFields.lastName)
          .should('have.value', formData.lastName)
        cy.get(formFields.username)
          .should('have.value', formData.username)
    });

    it("enters and retains other information", () => {
      cy.visit("http://localhost:3000");
      nextPage();
      nextPage();
      cy.contains("Other");
      fillFields({
        [formFields.nationality]: formData.nationality,
        [formFields.other]: formData.other
      });
      prevPage();
      cy.contains('Personal Info');
      nextPage();
      cy.get(formFields.nationality)
        .should('have.value', formData.nationality)
      cy.get(formFields.other)
        .should('have.value', formData.other)
    });

    it("submits information on submit", () => {
      cy.visit("http://localhost:3000");
      fillFields({
        [formFields.email]: formData.email,
        [formFields.password]: formData.password,
        [formFields.confirmPassword]: formData.confirmPassword,
      });
      nextPage();
      fillFields({
        [formFields.firstName]: formData.firstName,
        [formFields.lastName]: formData.lastName,
        [formFields.username]: formData.username,
      });
      nextPage()
      fillFields({
        [formFields.nationality]: formData.nationality,
        [formFields.other]: formData.other
      });
      submitForm();
      cy.on('window:alert', (text) => {
        expect(text).to.contain('FORM SUBMITTED')
      });
    });
  });
});
