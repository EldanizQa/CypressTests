/// <reference types="cypress"/>

it('Login Avtosalon', () =>{
    cy.viewport('macbook-15')
    cy.wait(10000)
cy.visit('https://dev.mashin.al/')
cy.get('.m-auto').click()
cy.get('.text-input').click().type('552101101')
cy.get('form').contains('Daxil ol').click()

cy.get('.confirm-sms-code input[type="text"]').type('12345')
cy.get('form').contains('Təsdiqlə').click()
})

it('Avtosalon, teklifi qebul et', () =>{
    cy.viewport('macbook-15')
cy.get('a[href="/salonlar/offer"]').click()
cy.get('.user').eq(0).click()
cy.get('.text-right').contains('Sorğunu qəbul et').click()
// cy.get('.btn--green mt-3').click()
cy.get('#textarea').type('12345')
cy.get('.icon-send').click()
// cy.get('form').contains('Hesabdan çıx').click()
cy.get('li').contains('Hesabdan çıx').click()
})  

// it('Login User', () =>{
//     cy.viewport('macbook-15')
//     cy.wait(10000)
// cy.visit('https://dev.mashin.al/')
// cy.get('.m-auto').click()
// cy.get('.text-input').click().type('552187485')
// cy.get('form').contains('Daxil ol').click()
// // cy.get('form').contains('Daxil ol').click()
// cy.get('.confirm-sms-code input[type="text"]').type('12345')
// cy.get('form').contains('Təsdiqlə').click()

// // cy.get('select-menu_dropdown anchor-left anchor-bottom show').get('text-truncate').click()
// // cy.get('.text-truncate').eq(1).get('search-input').click().contains('Marka:').type('Acura')
// // cy.get.('[id="selection_option_375"]').trigger('mousemove').click()
// // cy.get('a[href*="/offer"]').click()
// })

// it('Super teklife Daxil ol', () =>{
//     cy.viewport('macbook-15')
//     cy.get('a[href*="/offer"]').click()
// cy.get('.offer-button').click()
// })

// it('Teklife cevab yaz', () =>{
//     cy.viewport('macbook-15')
// cy.get('.user').eq(1).click()
// cy.get('#textarea').type('12345')
// cy.get('.icon-send').click() 
// })

// it('Super teklifi sil', () =>{
//     cy.viewport('macbook-15')
//  cy.get('.icon-garbage').click()
// })