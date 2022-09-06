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
  
  it('Link from product list to product details', () => {
    cy.intercept('GET', '*/product/', {fixture: 'productsList.json'})
    cy.intercept('GET', '*/product/cGjFJlmqNPIwU59AOcY8H', {fixture: 'productDetails.json'})

    cy.visit('http://localhost:3000/')

    cy.get('.linkToProduct')
      .first().click()

    cy.url().should('include', 'cGjFJlmqNPIwU59AOcY8H')
  })
  
  it('Add element to cart', () => {
    cy.intercept('GET', '*/product/productID', {fixture: 'productDetails.json'})

    cy.visit('http://localhost:3000/cGjFJlmqNPIwU59AOcY8H')

    cy.get('.cartInfo').contains('Products in cart: 0')

    cy.get('.addToCartButton').click()
    cy.get('.cartInfo').contains('Products in cart: 1')

    cy.get('.addToCartButton').click()
    cy.get('.cartInfo').contains('Products in cart: 2')
  })
  
  it('Cart persists while changing window', () => {
    cy.intercept('GET', '*/product/', {fixture: 'productsList.json'})
    cy.intercept('GET', '*/product/productID', {fixture: 'productDetails.json'})

    cy.visit('http://localhost:3000/cGjFJlmqNPIwU59AOcY8H')

    cy.get('.cartInfo').contains('Products in cart: 0')

    cy.get('.addToCartButton').click()
    cy.get('.cartInfo').contains('Products in cart: 1')
    
    cy.get('.linkHome').click()
    cy.get('.cartInfo').contains('Products in cart: 1')

    cy.get('.linkToProduct').first().click()
    cy.get('.cartInfo').contains('Products in cart: 1')
  })
})