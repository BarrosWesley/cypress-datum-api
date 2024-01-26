Cypress.Commands.add('compareData', (current, expected) => {

    cy.log(`API return: ${JSON.stringify(current)}`);
  
    expect(current).to.deep.equal(expected);
  });