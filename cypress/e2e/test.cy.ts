/// <reference types="cypress" />

describe("Test", () => {
  it("funciona", () => {
    cy.visit('/')
      .wait(20)
      .get('[data-cy="input"]')
      .type('023')

    cy.get('[data-cy="p"]')
      .contains('023xxxxxxxxx')

  })
})
