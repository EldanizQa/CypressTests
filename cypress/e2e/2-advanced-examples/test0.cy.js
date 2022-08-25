/// <reference types="cypress"/>

it('test-case1', () =>{
    cy.viewport('macbook-15')
    cy.wait(10000)
    cy.visit('https://dev.mashin.al/offer')
    cy.get('.m-auto').click()
cy.get('.text-input').click().type('552101101')
cy.get('form').contains('Daxil ol').click()

cy.get('.confirm-sms-code input[type="text"]').type('12345')
cy.get('form').contains('Təsdiqlə').click()
    cy.get('.user-menu__title').trigger('mouseover')
})