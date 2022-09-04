describe('Store tests', () => {
  it('Loading products list from API', () => {    
    cy.intercept('GET', '*/product/')
      .as('get-products')
    
    cy.visit('http://localhost:3000/')
    cy.wait('@get-products')
      .should('have.nested.property', 'response.statusCode', 200)
    cy.get('@get-products')
      .its('response.body')
      .should('be.an', 'array')
      .and('have.nested.property', '[0]')
      .and('include.all.keys', ['id', 'brand', 'imgUrl', 'model', 'price'])
  })
  
  it('Access product details', () => {
    cy.intercept('GET', '*/product/', {fixture: 'productsList.json'})
      .as('get-products')
      cy.intercept('GET', '*/product/productID', {fixture: 'productDetails.json'})
        .as('get-products')

    cy.visit('http://localhost:3000/')

    const productLink = cy.get('[data-cy="linkToProduct"]')
      .first().click()

    cy.url().should('include', 'productID')
  })
})