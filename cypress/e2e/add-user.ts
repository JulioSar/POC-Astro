import "@testing-library/cypress/add-commands";
import * as preprocessor from "@badeball/cypress-cucumber-preprocessor";
const { Given, Then, When } = preprocessor;

describe("Add User", () => {
  Given("I am on the dashboard", () => {
    cy.visit("/");
  });
  When("I click admin", () => {
    cy.intercept({ method: "GET", url: "/user" }, []).as("getUsers");
    cy.findByText("Admin").click();
  });
  Then("I should be on the admin user panel", () => {
    cy.url().should("include", "/admin");
  });
  When("I click add new user", () => {
    cy.wait(1000);
    cy.findByRole("button", { name: "Add New User" }).click();
  });

  Then("The modal should render", () => {
    cy.findByRole("button", { name: "Submit" }).should("be.visible");
  });
  When("I fill in 'name' with {string}", (username: string) => {
    cy.findByPlaceholderText("Name").type(username);
  });
  When("I fill in 'email' with 'test@mail.com'", () => {
    cy.findByPlaceholderText("Email").type("mail@mail.com");
  });
  When("I click Submit", () => {
    cy.intercept(
      {
        method: "PUT",
        url: "/user/**",
      },
      {
        statusCode: 201,
        body: {
          message: "OK",
        },
      }
    ).as("addUserPut");
    cy.findByRole("button", { name: /Submit/i }).click();
  });

  Then("Notification should render with success message", () => {
    cy.contains(/Data added correctly/i).should("be.visible");
  });
});
